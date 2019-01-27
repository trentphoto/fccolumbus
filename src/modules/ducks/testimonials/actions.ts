import { createAction } from '../../utils/createAction'
import { ActionsUnion } from '../../utils/types'
import * as types from './types'

const fetchAllTestimonials = {
  fetchAllTestimonialsRequest: () =>
    createAction(types.FETCH_ALL_TESTIMONIALS_REQUEST),
  fetchAllTestimonialsSuccess: (testimonials: ProcessedTestimonial[]) =>
    createAction(types.FETCH_ALL_TESTIMONIALS_SUCCESS, { testimonials }),
  fetchAllTestimonialsFail: (error: string) =>
    createAction(types.FETCH_ALL_TESTIMONIALS_FAIL, { error })
}

export const Actions = {
  ...fetchAllTestimonials
}

export type Actions = ActionsUnion<typeof Actions>
