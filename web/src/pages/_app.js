import React from 'react'
import App from 'next/app'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '../components/layout'
import { Code } from '../components/code'
import { Heading } from '../components/heading'
import { SubHeading } from '../components/sub-heading'
import { Text } from '../components/text'
import { Link } from '../components/link'

const components = {
  code: Code,
  h1: Heading,
  h2: SubHeading,
  p: Text,
  a: Link,
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <MDXProvider components={components}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    )
  }
}

export default MyApp
