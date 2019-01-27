import api from '../../api'
import { Actions } from './actions'
import { Dispatch } from 'redux'
import { urlBase } from '../../../config'

export const fetchAllTestimonialsRequest = () =>
  Actions.fetchAllTestimonialsRequest()
export const fetchAllTestimonialsSuccess = (
  testimonials: ProcessedTestimonial[]
) => Actions.fetchAllTestimonialsSuccess(testimonials)
export const fetchAllTestimonialsFail = (error: string) =>
  Actions.fetchAllTestimonialsFail(error)

export const fetchAllTestimonials = () => async (dispatch: Dispatch) => {
  try {
    dispatch(Actions.fetchAllTestimonialsRequest())
    const testimonials = await api.wp.getAllTestimonials()

    const testimonialsProcessed = testimonials.map((i: WPTestimonial) => ({
      title: i.title.rendered,
      id: i.id,
      content: i.content.rendered,
      img: i._embedded
        ? urlBase + i._embedded['wp:featuredmedia'][0].source_url
        : ''
    }))

    dispatch(Actions.fetchAllTestimonialsSuccess(testimonialsProcessed))
    return testimonials
  } catch (error) {
    dispatch(Actions.fetchAllTestimonialsFail(error))
    return error
  }
}
