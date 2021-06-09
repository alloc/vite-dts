export const styleKeys = Object.getOwnPropertyNames(
  Object.getPrototypeOf(document.createElement('div').style)
).filter(k => !/(-|Moz|Webkit)/i.test(k))
