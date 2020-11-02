# `@plinth-ui/tabs`

[WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel)

## Installation

```
npm install @plinth-ui/tabs
# or
yarn add @plinth-ui/tabs
```

### Usage

```
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
