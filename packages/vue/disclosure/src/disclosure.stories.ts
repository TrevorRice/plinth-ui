import { ref } from 'vue';
import { Disclosure, DisclosureTrigger, DisclosurePanel } from './';

export default {
  title: 'Components/Disclosure',
  component: Disclosure,
};

export const Uncontrolled = () => ({
  components: { Disclosure, DisclosureTrigger, DisclosurePanel },
  template: `
    <Disclosure v-slot="{ open }">
        <DisclosureTrigger>Open: {{ open }}</DisclosureTrigger>
        <DisclosurePanel>Panel</DisclosurePanel>
    </Disclosure>
  `,
});

export const Controlled = () => ({
  components: { Disclosure, DisclosureTrigger, DisclosurePanel },
  data() {
    return { open: false };
  },
  template: `
      <Disclosure v-model="open">
          <DisclosureTrigger>Open: {{ open }}</DisclosureTrigger>
          <DisclosurePanel>Panel</DisclosurePanel>
      </Disclosure>
    `,
});
