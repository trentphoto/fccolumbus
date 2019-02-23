import { combineReducers } from 'redux'
import * as types from './types'
import * as fromActions from './actions'

const initialState: types.StaffState = {
  allStaff: {
    error: null,
    loading: true,
    data: []
  }
}

const allStaff = (
  state: types.StaffState['allStaff'] = initialState.allStaff,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.FETCH_ALL_NEWS_REQUEST:
      return { error: null, loading: true, data: [] }
    case types.FETCH_ALL_NEWS_SUCCESS:
      return { ...state, loading: false, data: action.payload.news }
    case types.FETCH_ALL_NEWS_FAIL:
      return { ...state, loading: false, error: action.payload.error }
    default: {
      return state
    }
  }
}

export default combineReducers({ allStaff })
