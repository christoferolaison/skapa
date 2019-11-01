// @flow

import * as React from 'react'

import { useTheme } from '../theme'

type HeadingT = {
  children: React.Node,
}

export function SubHeading({ children }: HeadingT) {
  const theme = useTheme()
  return <h1 style={theme.fonts.subHeading}>{children}</h1>
}
