import {
  defineComponent,
  h,
  ref,
  toRef,
  provide,
  inject,
  InjectionKey,
  Ref,
} from 'vue';
import { useId } from '@plinth-ui/vue-id';

type DisclosureContextValue = {
  id: string;
  disabled?: boolean;
  open: Ref<boolean>;
  toggle(): void;
};

const DisclosureContext: InjectionKey<DisclosureContextValue> =
  Symbol('DisclosureContext');

function useDisclosureContext() {
  const context = inject(DisclosureContext, null);

  if (context === null) {
    throw new Error();
  }

  return context;
}

/* ----------------------------------------------------------------------------
 * Disclosure
 * --------------------------------------------------------------------------*/

const Disclosure = defineComponent({
  name: 'Disclosure',
  props: {
    defaultOpen: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: null }, // null vs undefined?
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const controlled = props.modelValue !== null;
    const open = controlled
      ? toRef(props, 'modelValue')
      : ref(props.defaultOpen);

    const toggle = () => {
      if (controlled) {
        emit('update:modelValue', !open.value);
      } else {
        open.value = !open.value;
      }
    };

    const context: DisclosureContextValue = {
      id: `disclosure--${useId()}`,
      open,
      toggle,
    };

    provide(DisclosureContext, context);
    return () => slots.default?.({ open: context.open });
  },
});

/* ----------------------------------------------------------------------------
 * DisclosureTrigger
 * --------------------------------------------------------------------------*/

const DisclosureTrigger = defineComponent({
  name: 'DisclosureTrigger',
  setup(props, { slots }) {
    const context = useDisclosureContext();
    return () =>
      h(
        'button',
        {
          type: 'button',
          'aria-expanded': context.open.value,
          'aria-controls': context.id,
          onClick: () => context.toggle(),
        },
        slots.default?.()
      );
  },
});

/* ----------------------------------------------------------------------------
 * DisclosurePanel
 * --------------------------------------------------------------------------*/

const DisclosurePanel = defineComponent({
  name: 'DisclosurePanel',
  setup(props, { slots }) {
    const context = useDisclosureContext();
    return () =>
      context.open.value
        ? h('div', { id: context.id }, slots.default?.())
        : null;
  },
});

/* --------------------------------------------------------------------------*/

const Root = Disclosure;
const Trigger = DisclosureTrigger;
const Panel = DisclosurePanel;

export {
  Disclosure,
  DisclosureTrigger,
  DisclosurePanel,
  //
  Root,
  Trigger,
  Panel,
};
