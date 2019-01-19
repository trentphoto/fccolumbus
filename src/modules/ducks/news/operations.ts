import api from '../../api'
import { Actions } from './actions'
import { Dispatch } from 'redux'
import { urlBase } from '../../../config'

export const fetchAllNewsRequest = () => Actions.fetchAllNewsRequest()
export const fetchAllNewsSuccess = (news: ProcessedNews[]) =>
  Actions.fetchAllNewsSuccess(news)
export const fetchAllNewsFail = (error: string) =>
  Actions.fetchAllNewsFail(error)

export const fetchAllNews = () => async (dispatch: Dispatch) => {
  try {
    dispatch(Actions.fetchAllNewsRequest())
    const news = await api.wp.getAllNews()

    const newsProcessed = news.map((i: WPNews) => ({
      title: i.title.rendered,
      id: i.id,
      slug: i.slug,
      date: i.date,
      content: i.content.rendered,
      excerpt: i.acf.excerpt,
      img: urlBase + i._embedded['wp:featuredmedia'][0].source_url
    }))

    dispatch(Actions.fetchAllNewsSuccess(newsProcessed))
    return news
  } catch (error) {
    dispatch(Actions.fetchAllNewsFail(error))
    return error
  }
}
