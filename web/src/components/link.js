// @flow

import * as React from 'react'
import { useRouter } from 'next/router'

import { useTheme } from '../theme'

type TextT = {
  children: React.Node,
  href: string,
}

export function Link({ children, href }: TextT) {
  const [hovering, setHovering] = React.useState(false)
  const theme = useTheme()
  const router = useRouter()
  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{
        ...theme.fonts.link(hovering),
        // textDecorationColor: 'pink',
        // textDecoration: 'none',
        display: 'inline',
      }}
    >
      {children}
    </a>
  )
}
