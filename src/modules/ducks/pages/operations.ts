import api from '../../api'
import { Actions } from './actions'
import { Dispatch } from 'redux'
import { urlBase } from '../../../config'

export const fetchAllPagesRequest = () => Actions.fetchAllPagesRequest()
export const fetchAllPagesSuccess = (pages: ProcessedPage[]) =>
  Actions.fetchAllPagesSuccess(pages)
export const fetchAllPagesFail = (error: string) =>
  Actions.fetchAllPagesFail(error)

export const fetchAllPages = () => async (dispatch: Dispatch) => {
  try {
    dispatch(Actions.fetchAllPagesRequest())
    const pages = await api.wp.getAllPages()

    const pagesProcessed = pages.map((i: WPPage) => ({
      title: i.title.rendered,
      id: i.id,
      slug: i.slug,
      date: new Date(i.date),
      content: i.content.rendered,
      excerpt: i.excerpt.rendered,
      parent: i.parent,
      img: i._embedded['wp:featuredmedia']
        ? `${urlBase}/${i._embedded['wp:featuredmedia'][0].source_url}`
        : ''
    }))

    dispatch(Actions.fetchAllPagesSuccess(pagesProcessed))

    return pages
  } catch (error) {
    dispatch(Actions.fetchAllPagesFail(error))
    return error
  }
}
