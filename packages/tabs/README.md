# `@plinth-ui/tabs`

> Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.
>
> [WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel)

## Installation

```sh
// npm
npm install @plinth-ui/tabs

// yarn
yarn add @plinth-ui/tabs
```

```vue
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@plinth-ui/tabs'
```

## API

### Tabs

```vue
// Basic

<tabs>
  <tab-list>
    <tab>Tab 1</tab>
    <tab>Tab 2</tab>
  </tab-list>
  <tab-panels>
    <tab-panel>Panel 1</tab-panel>
    <tab-panel>Panel 2</tab-panel>
  </tab-panels>
</tabs>

// Controlled
<tabs>
  <tab-list v-model="activeTabValue">
    <tab>Tab 1</tab>
    <tab>Tab 2</tab>
  </tab-list>
  <tab-panels>
    <tab-panel>Panel 1</tab-panel>
    <tab-panel>Panel 2</tab-panel>
  </tab-panels>
</tabs>
```

#### Props

| Name      | Type   | Default | Description                                           |
| --------- | ------ | ------- | ----------------------------------------------------- |
| `as`      | String | `div`   | The element or component the `Tabs` should render as. |
| `v-model` | Number | `null`  | Allows user to control which panel is open.           |

#### Slots

| Name      | Description                                                                             |
| --------- | --------------------------------------------------------------------------------------- |
| `default` | Expects `TabList` and `TabPanels` componenets as either direct children or descendants. |

#### Events

| Name                | Description                             |
| ------------------- | --------------------------------------- |
| `update:modelValue` | Emits when the tab's state has changed. |

### TabList

```vue
<tab-list>
  <tab>Tab 1</tab>
  <!-- ... -->
</tab-list>
```

#### Props

| Name | Type   | Default | Description                                              |
| ---- | ------ | ------- | -------------------------------------------------------- |
| `as` | String | `div`   | The element or component the `TabList` should render as. |

#### Slots

| Name      | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| `default` | Expects `Tab` componenets as either direct children or descendants. |

### Tab

```vue
<tab
  v-slot="{ active }"
  :class="active ? 'tab--active' : 'tab--inactive'"
  class="tab"
>
  Click me!
</tab>
```

#### Props

| Name | Type   | Default  | Description                                          |
| ---- | ------ | -------- | ---------------------------------------------------- |
| `as` | String | `button` | The element or component the `Tab` should render as. |

#### Slots

| Name      | Description                |
| --------- | -------------------------- |
| `default` | Use for the tab's content. |

### TabPanels

```vue
<tab-panels>
  <tab-panel>Panel 1</tab-panel>
  <!-- ... -->
</tab-panels>
```

#### Props

| Name | Type   | Default | Description                                                |
| ---- | ------ | ------- | ---------------------------------------------------------- |
| `as` | String | `div`   | The element or component the `TabPanels` should render as. |

#### Slots

| Name      | Description                                                              |
| --------- | ------------------------------------------------------------------------ |
| `default` | Expects `TabPanel` componenets as either direct children or descendants. |

### TabPanel

```vue
<tab-panel>
  The tab content.
</tab-panel>
```

#### Props

| Name | Type   | Default | Description                                               |
| ---- | ------ | ------- | --------------------------------------------------------- |
| `as` | String | `div`   | The element or component the `TabPanel` should render as. |

#### Slots

| Name      | Description                  |
| --------- | ---------------------------- |
| `default` | Use for the panel's content. |
