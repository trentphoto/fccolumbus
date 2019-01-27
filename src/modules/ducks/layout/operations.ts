import { Actions } from './actions'
import { Dispatch } from 'redux'

// const closeSearchAction = () => Actions.closeSearch()
// const openSearchAction = () => Actions.openSearch()

export const closeSearch = () => (dispatch: Dispatch) => {
  dispatch(Actions.closeSearch())
}

export const openSearch = () => (dispatch: Dispatch) => {
  dispatch(Actions.openSearch())
}

export const openMenu = () => (dispatch: Dispatch) =>
  dispatch(Actions.openMenu())
export const closeMenu = () => (dispatch: Dispatch) =>
  dispatch(Actions.closeMenu())
