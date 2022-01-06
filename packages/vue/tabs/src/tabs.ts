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

type TabsContextValue = {
  activeIndex: Ref<number>;
  updateActiveIndex(index: number): void;
};

const TabsContext: InjectionKey<TabsContextValue> = Symbol('TabsContext');

function useTabsContext() {
  const context = inject(TabsContext, null);

  if (context === null) {
    throw new Error();
  }

  return context;
}

/* ----------------------------------------------------------------------------
 * Tabs
 * --------------------------------------------------------------------------*/

const Tabs = defineComponent({
  name: 'Tabs',
  props: {
    activation: {
      type: String,
      default: 'automatic',
      validator: (val: string) => ['automatic', 'manual'].includes(val),
    },
    defaultIndex: { type: Number, default: 0 },
    orientation: {
      type: String,
      default: 'horizontal',
      validator: (val: string) => ['horizontal', 'vertical'].includes(val),
    },
    modelValue: { type: Number, default: null }, // null vs undefined?
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const controlled = props.modelValue !== null;
    const activeIndex = controlled
      ? toRef(props, 'modelValue')
      : ref(props.defaultIndex);

    const updateActiveIndex = (index: number) => {
      if (controlled) {
        emit('update:modelValue', index);
      } else {
        activeIndex.value = index;
      }
    };

    const context: TabsContextValue = {
      activeIndex,
      updateActiveIndex,
    };

    provide(TabsContext, context);
    return () => slots.default?.();
  },
});

/* ----------------------------------------------------------------------------
 * TabsList
 * --------------------------------------------------------------------------*/

const TabsList = defineComponent({
  name: 'TabsList',
  props: {
    loop: { type: Boolean, default: true },
  },
  setup(props, { slots }) {
    const context = useTabsContext();
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
 * TabsTrigger
 * --------------------------------------------------------------------------*/

const TabsTrigger = defineComponent({
  name: 'TabsTrigger',
  setup(props, { slots }) {
    const context = useTabsContext();
    return () =>
      context.open.value
        ? h('div', { id: context.id }, slots.default?.())
        : null;
  },
});

/* ----------------------------------------------------------------------------
 * TabsPanel
 * --------------------------------------------------------------------------*/

const TabsPanel = defineComponent({
  name: 'TabsPanel',
  setup(props, { slots }) {
    const context = useTabsContext();
    return () =>
      context.open.value
        ? h('div', { id: context.id }, slots.default?.())
        : null;
  },
});

/* --------------------------------------------------------------------------*/

const Root = Tabs;
const List = TabsList;
const Trigger = TabsTrigger;
const Panel = TabsPanel;

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsPanel,
  //
  Root,
  List,
  Trigger,
  Panel,
};
