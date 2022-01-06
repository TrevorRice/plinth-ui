import { ref } from 'vue';
import { Tabs, TabsList, TabsTrigger, TabsPanel } from './';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

export const Uncontrolled = () => ({
  components: { Tabs, TabsList, TabsTrigger, TabsPanel },
  template: `
    <Tabs v-slot="{ activeIndex }">
        <TabsList>
            <TabsTrigger>Tab 1</TabsTrigger>
            <TabsTrigger>Tab 2</TabsTrigger>
            <TabsTrigger>Tab 3</TabsTrigger>
        </TabsList>
        <TabsPanel>Tab 1 content</TabsPanel>
        <TabsPanel>Tab 2 content</TabsPanel>
        <TabsPanel>Tab 3 content</TabsPanel>
    </Tabs>
  `,
});

export const Controlled = () => ({
  components: { Tabs, TabsList, TabsTrigger, TabsPanel },
  data() {
    return { index: 0 };
  },
  template: `
    <Tabs v-model="index">
        <TabsList>
            <TabsTrigger>Tab 1</TabsTrigger>
            <TabsTrigger>Tab 2</TabsTrigger>
            <TabsTrigger>Tab 3</TabsTrigger>
        </TabsList>
        <TabsPanel>Tab 1 content</TabsPanel>
        <TabsPanel>Tab 2 content</TabsPanel>
        <TabsPanel>Tab 3 content</TabsPanel>
    </Tabs>
    `,
});
