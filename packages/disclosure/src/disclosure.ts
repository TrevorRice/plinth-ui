import {
  defineComponent,
  ref,
  toRefs,
  toRef,
  provide,
  h,
  InjectionKey,
  Ref,
} from 'vue'
import { useId } from '../../utils/use-id'

type DiscolsureStateDefinition = {
  // State
  id: Ref<string | number>
  open: Ref<boolean>

  // State mutators
  updateOpen(open: boolean): void
}

export const DisclosureContext: InjectionKey<DiscolsureStateDefinition> = Symbol(
  'DisclosureContext'
)

export default defineComponent({
  name: 'Disclosure',
  props: {
    as: {
      type: String,
      default: 'template',
    },
    id: {
      type: [String, Number],
      default: null,
    },
    modelValue: {
      type: Boolean,
      default: null,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const isControlled = props.modelValue !== null
    const id = ref(props.id ? String(props.id) : `disclosure--${useId()}`)
    const isOpen = isControlled ? toRef(props, 'modelValue') : ref(false)

    const updateOpen = (open: boolean) => {
      emit('update:modelValue', open)
      if (!isControlled) {
        isOpen.value = open
      }
    }

    const context = { id, open: isOpen, updateOpen }
    provide(DisclosureContext, context)
    return props.as === 'template'
      ? () => slots.default?.({ open: isOpen.value }) // Which to use?
      : () => h(props.as, {}, slots.default?.({ open: isOpen.value }))
  },
})
