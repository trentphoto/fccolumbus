import { combineReducers } from 'redux'
import * as types from './types'
import * as fromActions from './actions'

const initialState: types.TestimonialState = {
  allTestimonials: {
    error: null,
    loading: true,
    data: []
  }
}

const allTestimonials = (
  state: types.TestimonialState['allTestimonials'] = initialState.allTestimonials,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.FETCH_ALL_TESTIMONIALS_REQUEST:
      return { error: null, loading: true, data: [] }
    case types.FETCH_ALL_TESTIMONIALS_SUCCESS:
      return { ...state, loading: false, data: action.payload.testimonials }
    case types.FETCH_ALL_TESTIMONIALS_FAIL:
      return { ...state, loading: false, error: action.payload.error }
    default: {
      return state
    }
  }
}

export default combineReducers({ allTestimonials })
