export const OPEN_SEARCH = '@@layout/OPEN_SEARCH'
export const CLOSE_SEARCH = '@@layout/CLOSE_SEARCH'
export const OPEN_MENU = '@@layout/OPEN_MENU'
export const CLOSE_MENU = '@@layout/CLOSE_MENU'

export interface LayoutState {
  searchOpen: boolean
  menuOpen: boolean
}
