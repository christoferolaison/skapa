// @flow

import React from 'react'

import { Heading } from '../components/heading'
import { Link } from '../components/link'

export default function Index() {
  return (
    <>
      <Heading>Blog</Heading>
      <Heading>Blog</Heading>
      <Link href="/create-a-blog-post-using-next-mdx-and-prism">
        Create a blog post using Next.js, MDX and Prism
      </Link>
    </>
  )
}
