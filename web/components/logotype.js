// @flow

import * as React from 'react'

type LogotypeT = {
  children: string,
}

export function Logotype({ children }: LogotypeT) {
  return (
    <span
      style={{
        fontFamily: `"Major Mono Display", monospace`,
        fontSize: 22,
        letterSpacing: 1,
        color: '#222222',
      }}
    >
      {children}
    </span>
  )
}
