import api from '../../api'
import { Actions } from './actions'
import { Dispatch } from 'redux'
import { urlBase } from '../../../config'

export const fetchAllNewsRequest = () => Actions.fetchAllNewsRequest()
export const fetchAllNewsSuccess = (news: ProcessedStaff[]) =>
  Actions.fetchAllNewsSuccess(news)
export const fetchAllNewsFail = (error: string) =>
  Actions.fetchAllNewsFail(error)

export const fetchAllStaff = () => async (dispatch: Dispatch) => {
  try {
    dispatch(Actions.fetchAllNewsRequest())
    const news = await api.wp.getAllStaff()

    const newsProcessed = news.map((i: WPStaff) => ({
      id: i.id,
      slug: i.slug,
      name: i.title.rendered,
      title: i.acf.title,
      email: i.acf.email,
      phone: i.acf.phone,
      content: i.content.rendered,
      img: i._embedded
        ? urlBase + i._embedded['wp:featuredmedia'][0].source_url
        : ''
    }))

    dispatch(Actions.fetchAllNewsSuccess(newsProcessed))
    return news
  } catch (error) {
    dispatch(Actions.fetchAllNewsFail(error))
    return error
  }
}
