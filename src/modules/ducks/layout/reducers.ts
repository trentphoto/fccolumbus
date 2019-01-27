import * as types from './types'
import * as fromActions from './actions'

const initialState: types.LayoutState = {
  searchOpen: false,
  menuOpen: false
}

const layout = (
  state: types.LayoutState = initialState,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.CLOSE_SEARCH:
      return { ...state, searchOpen: false }
    case types.OPEN_SEARCH:
      return { ...state, searchOpen: true }
    case types.OPEN_MENU:
      return { ...state, menuOpen: true }
    case types.CLOSE_MENU:
      return { ...state, menuOpen: false }
    default: {
      return state
    }
  }
}

export default layout
