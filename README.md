# vue-number-flip

A lightweight Vue 3 component for smooth, flip-style animated number transitions.

## Examples

![](./assets/demo.gif)

## Installation

```bash
npm install vue-number-flip
```

## Usage

import css in `main.ts`

```ts
import 'vue-number-flip/style.css'
```

basic useage

```vue
<template>
  <NumberFlip :value="num" />
</template>

<script>
import { ref } from 'vue'
import NumberFlip from 'vue-number-flip'

const num = ref(0)
</script>
```

## Props

| Name              | Description                                                                            | Type                   | Default                           |
| ----------------- | -------------------------------------------------------------------------------------- | ---------------------- | --------------------------------- |
| value `required`  | The number to be fliped                                                                | `number`               | -                                 |
| decimalSeparator  | The decimal separator which should be used when decimal numbers are being displayed.   | `string`               | `.`                               |
| thousandSeparator | The thousand separator which should be used when thousand numbers are being displayed. | `string`               | `,`                               |
| formatter         | A function which can be used to format the number before it is being displayed.        | `function`             | `(num: number) => num.toString()` |
| numbers           | The text of numbers to be displayed                                                    | `string[] \| number[]` | `[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]`  |

## License

MIT

## Inspiration

This project is inspired by [number-flip-animation](https://github.com/der-Lehmann/number-flip-animation)
