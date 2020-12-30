import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'Alert',
  props: {
    type: {
      type: String,
      default: 'polite',
      validator: (value: string) => ['assertive', 'polite'].includes(value),
    },
  },
  setup(props, { slots }) {
    /**
     * Elements with the role alert have an implicit aria-live value of assertive, and an implicit aria-atomic value of true.
     * Elements with the role status have an implicit aria-live value of polite and an implicit aria-atomic value of true.
     */
    const role = props.type === 'assertive' ? 'alert' : 'status'
    return () => h('div', { role }, slots.default())
  },
})
