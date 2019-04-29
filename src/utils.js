import { assign, transform, isObject, isArray } from 'lodash'

export const flattenStyle = styles =>
  transform(
    styles,
    (acc, style) => {
      if (isArray(style)) {
        assign(acc, flattenStyle(style))
      } else if (isObject(style)) {
        assign(acc, style)
      }
    },
    {}
  )