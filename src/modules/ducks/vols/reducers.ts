import { combineReducers } from 'redux'
import * as types from './types'
import * as fromActions from './actions'

const initialState: types.VolState = {
  allVols: {
    error: null,
    loading: true,
    data: []
  }
}

const allVols = (
  state: types.VolState['allVols'] = initialState.allVols,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.FETCH_ALL_VOLS_REQUEST:
      return { error: null, loading: true, data: [] }
    case types.FETCH_ALL_VOLS_SUCCESS:
      return { ...state, loading: false, data: action.payload.vols }
    case types.FETCH_ALL_VOLS_FAIL:
      return { ...state, loading: false, error: action.payload.error }
    default: {
      return state
    }
  }
}

export default combineReducers({ allVols })
