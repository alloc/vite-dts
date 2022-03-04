import * as React from 'react'
import { styleKeys } from './style-keys'

export interface Props extends React.CSSProperties {
  as?: string | React.ComponentType<{ style?: React.CSSProperties }>
  children?: any
}

export function Box({ as: View = 'div', children, ...props }: Props) {
  type Prop = keyof typeof props

  const style: any = {}
  for (const key in props) {
    if (styleKeys.includes(key)) {
      style[key] = props[key as Prop]
      delete props[key as Prop]
    }
  }

  return (
    <View {...props} style={style}>
      Nested
      {children}
    </View>
  )
}
