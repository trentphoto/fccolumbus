export default interface ThemeInterface {
  red: string
  redDark: string
  gray: string
  lightgray: string
  white: string
  dark: string
  timing: Timing
  zindex: Zindex
}

interface Zindex {
  menuTakeover: number
  searchTakeover: number
  navbar: number
  slideOut: number
}

interface Timing {
  duration: Duration
  curve: string
}

interface Duration {
  slow: string
  fast: string
}
