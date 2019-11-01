// @flow

import * as React from 'react'

type FontT = {
  +color: string,
  +fontFamily: string,
  +fontSize: number,
  +marginBottom: number,
  +marginTop: number,
  +transition?: string,
}

type ThemeT = {
  +fonts: {
    +body: FontT,
    +heading: FontT,
    +link: (hovering: boolean) => FontT,
    +subHeading: FontT,
  },
}

const theme: ThemeT = {
  fonts: {
    heading: {
      fontSize: 48,
      marginBottom: 28,
      marginTop: 56,
      fontFamily: `"Bowlby One SC"`,
      color: 'black',
    },
    subHeading: {
      fontSize: 24,
      marginBottom: 16,
      marginTop: 32,
      fontFamily: `"Bowlby One SC"`,
      color: 'black',
    },
    body: {
      fontSize: 16,
      marginBottom: 20,
      marginTop: 20,
      fontFamily: `"Open Sans"`,
      color: 'black',
    },
    link: isHovering => ({
      ...theme.fonts.body,
      color: isHovering ? 'red' : 'black',
      transition: '100ms all ease',
    }),
  },
}

const ThemeContext = React.createContext<ThemeT>(theme)

export function useTheme() {
  const theme = React.useContext(ThemeContext)
  return theme
}
