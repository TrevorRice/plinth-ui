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

#### Props

| Name   | Type | Validation            | Default  | Description                                                                                                                            |
| ------ | ---- | --------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type` | enum | `assertive`, `polite` | `polite` | Controls whether the assitive technology should interrupt the user's workflow ("assertive") or wait until the user is idle ("polite"). |

#### Slots

| Name      | Description                  |
| --------- | ---------------------------- |
| `default` | Use for the alert's content. |
