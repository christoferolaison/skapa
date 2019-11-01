// @flow

import * as React from 'react'
import Highlight, {
  defaultProps,
} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live'
import { mdx } from '@mdx-js/react'

type CodeT = {
  children: string,
  className: string,
  live: boolean,
  render: boolean,
}

export function Code({
  children,
  className,
  live,
  render,
}: CodeT) {
  const language = className.replace(/language-/, '')

  if (live) {
    return (
      <div>
        <LiveProvider
          code={children.trim()}
          language={language}
          transformCode={code => '/** @jsx mdx */' + code}
          scope={{ mdx }}
          theme={theme}
        >
          <LivePreview />
          <LiveError />
        </LiveProvider>
      </div>
    )
  }
  if (render) {
    return (
      <div>
        <LiveProvider code={children.trim()} theme={theme}>
          <LiveEditor disabled />
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <pre
          className={className}
          style={{
            ...style,
            marginTop: 20,
            marginBottom: 20,
            padding: 16,
          }}
        >
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
            >
              {line.map((token, key) => (
                <span
                  key={key}
                  {...getTokenProps({ token, key })}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
