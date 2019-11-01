// @flow

import * as React from 'react'

type LayoutT = {
  children: React.Node,
}

export function Layout({ children }: LayoutT) {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: '40px auto',
      }}
    >
      {children}
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        body {
          background: #fff;
        }
      `}</style>
    </div>
  )
}
