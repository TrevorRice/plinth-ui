# `@plinth-ui/disclosure`

[WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.2/#disclosure)

## Installation

```
npm install @plinth-ui/disclosure
# or
yarn add @plinth-ui/disclosure
```

### Usage

```
import { Disclosure, DisclosureButton, DisclosurePanel } from '@plinth-ui/disclosure'
```

## API

### Disclosure

#### Props

| Name   | Type | Validation            | Default  | Description                                                                                                                            |
| ------ | ---- | --------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type` | enum | `assertive`, `polite` | `polite` | Controls whether the assitive technology should interrupt the user's workflow ("assertive") or wait until the user is idle ("polite"). |

#### Slots

| Name      | Description                  |
| --------- | ---------------------------- |
| `default` | Use for the alert's content. |
