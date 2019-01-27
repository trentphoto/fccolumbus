export const FETCH_ALL_TESTIMONIALS_REQUEST =
  '@@testimonials/FETCH_ALL_TESTIMONIALS_REQUEST'
export const FETCH_ALL_TESTIMONIALS_SUCCESS =
  '@@testimonials/FETCH_ALL_TESTIMONIALS_SUCCESS'
export const FETCH_ALL_TESTIMONIALS_FAIL =
  '@@testimonials/FETCH_ALL_TESTIMONIALS_FAIL'

export interface TestimonialState {
  allTestimonials: {
    error: string | null
    loading: boolean
    data: ProcessedTestimonial[]
  }
  testimonials?: WPTestimonial
}
