# `@plinth-ui/disclosure`

[WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.2/#disclosure)

## Installation

```
// npm
npm install @plinth-ui/disclosure

// yarn
yarn add @plinth-ui/disclosure
```

### Usage

```
import { Disclosure, DisclosureButton, DisclosurePanel } from '@plinth-ui/disclosure'
```

## API

### Disclosure

#### Props

| Name   | Type    | Validation | Default            | Description                                                                                                |
| ------ | ------- | ---------- | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| `id`   | String  | —          | Randomly generated | An id used to assign ARIA and id attributes to nested `DisclosureButton` and `DisclosurePanel` components. |
| `open` | Boolean | —          | `false`            | Whether or not the disclosure is open.                                                                     |

#### Slots

| Name      | Description                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------ |
| `default` | Expects `DisclosureButton` and `DisclosurePanel` componenets as either direct children or descendants. |

#### Events

| Name          | Description                                      |
| ------------- | ------------------------------------------------ |
| `update:open` | Emits when a disclosure's open state is changed. |

### DisclosureButton

#### Props

| Name | Type   | Validation | Default  | Description                                                       |
| ---- | ------ | ---------- | -------- | ----------------------------------------------------------------- |
| `as` | String | —          | `button` | The element or component the `DisclosureButton` should render as. |

#### Slots

| Name      | Description                    |
| --------- | ------------------------------ |
| `default` | Use for the buttons's content. |

### DisclosurePanel

#### Props

| Name | Type   | Validation | Default | Description                                                      |
| ---- | ------ | ---------- | ------- | ---------------------------------------------------------------- |
| `as` | String | —          | `div`   | The element or component the `DisclosurePanel` should render as. |

#### Slots

| Name      | Description                  |
| --------- | ---------------------------- |
| `default` | Use for the panel's content. |
