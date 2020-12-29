import { h, inject, toRefs } from 'vue'

export default {
  name: 'DisclosureButton',
  setup(props, { slots }) {
    // Keep in external file
    const disclosureStates = inject('disclosureStates')
    const disclosureContext = inject('disclosureContext')
    const { id, open, updateOpen } = toRefs(disclosureContext)

    return () =>
      h(
        'button',
        {
          'aria-controls': id.value,
          'aria-open': open.value,
          'data-plinth-disclosure-button': '',
          'data-plinth-disclosure-button-state': open.value
            ? disclosureStates.Open
            : disclosureStates.Collapsed,
          onClick: () => updateOpen.value(!open.value),
        },
        slots.default()
      )
  },
}
