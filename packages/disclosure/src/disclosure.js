import { provide, reactive, toRefs } from 'vue'

const DisclosureStates = { Open: 'open', Collapsed: 'collapsed' }

export default {
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
    const disclosureContext = reactive({ id, open, updateOpen })
    provide('disclosureContext', disclosureContext)
    provide('disclosureStates', DisclosureStates)
    return () => slots.default()
  },
}
