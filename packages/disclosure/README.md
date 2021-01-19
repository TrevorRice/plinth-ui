# `@plinth-ui/disclosure`

> A disclosure is a button that controls visibility of a section of content. When the controlled content is hidden, it is often styled as a typical push button with a right-pointing arrow or triangle to hint that activating the button will display additional content. When the content is visible, the arrow or triangle typically points down.
>
> [WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.2/#disclosure)

## Installation

```sh
// npm
npm install @plinth-ui/disclosure

// yarn
yarn add @plinth-ui/disclosure
```

```sh
import { Disclosure, DisclosureButton, DisclosurePanel } from '@plinth-ui/disclosure'
```

## API

### Disclosure

```vue
// Basic

<disclosure>
 <disclosure-button>Reveal!</disclosure-button>
 <disclosure-panel><!-- ... --></disclosure-panel>
</disclosure>
```

```vue
// Controlled

<disclosure v-model="disclosureValue">
 <disclosure-button>Reveal!</disclosure-button>
 <disclosure-panel><!-- ... --></disclosure-panel>
</disclosure>
```

#### Props

| Name      | Type    | Default                         | Description                                                                                                |
| --------- | ------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `as`      | String  | `template` (no wrapper element) | The element or component the `Disclosure` should render as.                                                |
| `id`      | String  | Randomly generated              | An id used to assign ARIA and id attributes to nested `DisclosureButton` and `DisclosurePanel` components. |
| `v-model` | Boolean | `null`                          | Allows user to control whether or not the disclosure is open.                                              |

#### Slots

| Name      | Description                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------ |
| `default` | Expects `DisclosureButton` and `DisclosurePanel` componenets as either direct children or descendants. |

#### Events

| Name                | Description                                      |
| ------------------- | ------------------------------------------------ |
| `update:modelValue` | Emits when a disclosure's open state is changed. |

### DisclosureButton

```vue
<disclosure-button
  v-slot="{ open }"
  :class="open ? 'button--open' : 'button--closed'"
  class="button"
>
  Reveal!
</disclosure-button>
```

#### Props

| Name | Type   | Default  | Description                                                       |
| ---- | ------ | -------- | ----------------------------------------------------------------- |
| `as` | String | `button` | The element or component the `DisclosureButton` should render as. |

#### Slots

| Name      | Description                    |
| --------- | ------------------------------ |
| `default` | Use for the buttons's content. |

### DisclosurePanel

```vue
<disclosure-panel v-slot="{ open }">
  <!-- Panel content -->
</disclosure-panel>
```

#### Props

| Name | Type   | Default | Description                                                      |
| ---- | ------ | ------- | ---------------------------------------------------------------- |
| `as` | String | `div`   | The element or component the `DisclosurePanel` should render as. |

#### Slots

| Name      | Description                  |
| --------- | ---------------------------- |
| `default` | Use for the panel's content. |
