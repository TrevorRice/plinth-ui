import { defineComponent, InjectionKey, Ref, provide, toRefs } from 'vue'

type DiscolsureStateDefinition = {
  // State
  id: Ref<string | number>
  open: Ref<boolean>

  // State mutators
  updateOpen(open: boolean): void
}

export enum DisclosureStates {
  Open = 'open',
  Collapsed = 'collapsed',
}

export const DisclosureContext: InjectionKey<DiscolsureStateDefinition> = Symbol(
  'DisclosureContext'
)

export default defineComponent({
  name: 'Disclosure',
  props: {
    id: {
      type: [String, Number],
      default: 'something',
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:open'],
  setup(props, { slots, emit }) {
    const updateOpen = (open: boolean) => emit('update:open', open)
    const { id, open } = toRefs(props)
    const context = { id, open, updateOpen }
    provide(DisclosureContext, context)
    return () => slots.default!()
  },
})
