import { fetchAllPages } from '../ducks/pages/operations'
import { fetchAllNews } from '../ducks/news/operations'
import { fetchAllEvents } from '../ducks/events/operations'
import { fetchAllTestimonials } from '../ducks/testimonials/operations'
import { fetchAllPosts } from '../ducks/blog/operations'
import { Dispatch } from 'redux'

export const fetchEverything = (dispatch: Dispatch) => {
  fetchAllPages()(dispatch)
  fetchAllNews()(dispatch)
  fetchAllEvents()(dispatch)
  fetchAllTestimonials()(dispatch)
  fetchAllPosts()(dispatch)
}
