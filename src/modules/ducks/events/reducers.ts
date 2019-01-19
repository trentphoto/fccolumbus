import { combineReducers } from 'redux'
import * as types from './types'
import * as fromActions from './actions'

const initialState: types.EventState = {
  allEvents: {
    error: null,
    loading: true,
    data: []
  }
}

const allEvents = (
  state: types.EventState['allEvents'] = initialState.allEvents,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.FETCH_ALL_EVENTS_REQUEST:
      return { error: null, loading: true, data: [] }
    case types.FETCH_ALL_EVENTS_SUCCESS:
      return { ...state, loading: false, data: action.payload.events }
    case types.FETCH_ALL_EVENTS_FAIL:
      return { ...state, loading: false, error: action.payload.error }
    default: {
      return state
    }
  }
}

export default combineReducers({ allEvents })
