import React from 'react'

export function Logotype({ children }) {
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
