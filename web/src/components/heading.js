// @flow

import * as React from 'react'

import { useTheme } from '../theme'

type HeadingT = {
  children: React.Node,
}

export function Heading({ children }: HeadingT) {
  const theme = useTheme()
  return <h1 style={theme.fonts.heading}>{children}</h1>
}
