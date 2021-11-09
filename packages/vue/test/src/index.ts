import { defineComponent, h } from 'vue';

export const Test = defineComponent({
  name: 'Test',
  setup() {
    return () => h('div', 'hello');
  },
});
