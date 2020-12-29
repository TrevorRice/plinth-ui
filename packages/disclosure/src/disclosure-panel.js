import { h, inject, toRefs } from 'vue'

export default {
  name: 'DisclosurePanel',
  setup(props, { slots }) {
    const disclosureStates = inject('disclosureStates')
    const disclosureContext = inject('disclosureContext')
    const { id, open } = toRefs(disclosureContext)

    return () =>
      h(
        'div',
        {
          id: id.value,
          tabindex: -1,
          'data-plinth-disclosure-panel': '',
          'data-plinth-disclosure-panel-state': open.value
            ? disclosureStates.Open
            : disclosureStates.Collapsed,
          style: [{ display: open.value ? 'block' : 'none' }],
        },
        slots.default()
      )
  },
}
