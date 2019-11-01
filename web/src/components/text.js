// @flow

import * as React from 'react'

import { useTheme } from '../theme'

type TextT = {
  children: React.Node,
}

export function Text({ children }: TextT) {
  const theme = useTheme()
  return <p style={theme.fonts.body}>{children}</p>
}
