import { defineComponent, Ref, provide, reactive, toRefs } from 'vue'

export interface DisclosureContext {
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
    const { id, open } = toRefs(props)
    const updateOpen = (open) => emit('update:open', open)
    const context = reactive<DisclosureContext>({
      id,
      open,
      updateOpen,
    })
    provide('disclosureContext', context)
    return () => slots.default()
  },
})
