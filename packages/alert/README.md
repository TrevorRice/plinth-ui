# `@plinth-ui/alert`

[WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.2/#alert)

## Installation

```
npm install @plinth-ui/alert
# or
yarn add @plinth-ui/alert
```

### Usage

```
import Alert from '@plinth-ui/alert'
```

## API

### Alert

#### Props

| Name   | Type | Validation            | Default  | Description                                                                                                                            |
| ------ | ---- | --------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type` | enum | `assertive`, `polite` | `polite` | Controls whether the assitive technology should interrupt the user's workflow ("assertive") or wait until the user is idle ("polite"). |

#### Slots

| Name      | Description                  |
| --------- | ---------------------------- |
| `default` | Use for the alert's content. |