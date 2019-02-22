import { fetchAllPages } from '../ducks/pages/operations'
import { fetchAllNews } from '../ducks/news/operations'
import { fetchAllEvents } from '../ducks/events/operations'
import { fetchAllTestimonials } from '../ducks/testimonials/operations'
import { fetchAllPosts } from '../ducks/blog/operations'
import { fetchAllVols } from '../ducks/vols/operations'
import { fetchAllStaff } from '../ducks/staff/operations'
import { Dispatch } from 'redux'

export const fetchEverything = (dispatch: Dispatch) => {
  fetchAllPages()(dispatch)
  fetchAllNews()(dispatch)
  fetchAllEvents()(dispatch)
  fetchAllTestimonials()(dispatch)
  fetchAllPosts()(dispatch)
  fetchAllVols()(dispatch)
  fetchAllStaff()(dispatch)
}
