export default interface ThemeInterface {
  red: string
  redDark: string
  gray: string
  lightgray: string
  white: string
  dark: string
  timing: Timing
}

interface Timing {
  duration: Duration
  curve: string
}

interface Duration {
  slow: string
  fast: string
}
