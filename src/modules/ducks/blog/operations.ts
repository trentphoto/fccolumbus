import api from '../../api'
import { Actions } from './actions'
import { Dispatch } from 'redux'
import { urlBase } from '../../../config'

export const fetchAllPostsRequest = () => Actions.fetchAllPostsRequest()
export const fetchAllPostsSuccess = (news: ProcessedNews[]) =>
  Actions.fetchAllPostsSuccess(news)
export const fetchAllPostsFail = (error: string) =>
  Actions.fetchAllPostsFail(error)

export const fetchAllPosts = () => async (dispatch: Dispatch) => {
  try {
    dispatch(Actions.fetchAllPostsRequest())
    const posts = await api.wp.getAllPastorsBlog()

    const postsProcessed = posts.map((i: WPNews) => ({
      title: i.title.rendered,
      id: i.id,
      slug: i.slug,
      date: i.date,
      content: i.content.rendered,
      excerpt: i.acf.excerpt,
      img: i._embedded
        ? urlBase + i._embedded['wp:featuredmedia'][0].source_url
        : ''
    }))

    dispatch(Actions.fetchAllPostsSuccess(postsProcessed))

    return posts
  } catch (error) {
    dispatch(Actions.fetchAllPostsFail(error))
    return error
  }
}
