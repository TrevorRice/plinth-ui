import { defineComponent, h, inject, toRefs } from 'vue'
import { DisclosureStates, DisclosureContext } from './disclosure'

export default defineComponent({
  name: 'DisclosurePanel',
  setup(props, { slots }) {
    const context = inject<DisclosureContext>('disclosureContext')
    const { id, open } = toRefs(context)

    return () =>
      h(
        'div',
        {
          id: id.value,
          tabindex: -1,
          'data-plinth-disclosure-panel': '',
          'data-plinth-disclosure-panel-state': open.value
            ? DisclosureStates.Open
            : DisclosureStates.Collapsed,
          style: [{ display: open.value ? 'block' : 'none' }],
        },
        slots.default()
      )
  },
})
