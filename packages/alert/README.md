# `@plinth-ui/alert`

> An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task. Dynamically rendered alerts are automatically announced by most screen readers, and in some operating systems, they may trigger an alert sound.
>
> [WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.2/#alert)

## Installation

```sh
// npm
npm install @plinth-ui/alert

// yarn
yarn add @plinth-ui/alert
```

```sh
import Alert from '@plinth-ui/alert'
```

## API

### Alert

#### Props

| Name   | Type | Validation            | Default  | Description                                                                                                                            |
| ------ | ---- | --------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type` | Enum | `assertive`, `polite` | `polite` | Controls whether the assitive technology should interrupt the user's workflow ("assertive") or wait until the user is idle ("polite"). |

#### Slots

| Name      | Description                  |
| --------- | ---------------------------- |
| `default` | Use for the alert's content. |

#### Usage

```vue
<alert type="assertive">
  Your content here!
</alert>
```
