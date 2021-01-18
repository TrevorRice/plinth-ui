import {
  defineComponent,
  ref,
  toRefs,
  provide,
  h,
  InjectionKey,
  Ref,
} from 'vue'

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
      default: 'something',
    },
    modelValue: {
      type: Boolean,
      default: null,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const { id, modelValue } = toRefs(props)
    const isControlled = modelValue.value !== null
    const isOpen = isControlled ? modelValue : ref(false)

    const updateOpen = (open: boolean) => {
      emit('update:modelValue', open)
      if (!isControlled) {
        isOpen.value = open
      }
    }

    const context = { id, open: isOpen, updateOpen }
    provide(DisclosureContext, context)
    return props.as === 'template'
      ? () => slots.default?.() // Which to use?
      : () => h(props.as, {}, slots.default!())
  },
})
