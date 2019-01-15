import api from '../../api'
import { Actions } from './actions'
import { Dispatch } from 'redux'

export const fetchAllPagesRequest = () => Actions.fetchAllPagesRequest()
export const fetchAllPagesFail = (error: string) =>
  Actions.fetchAllPagesFail(error)
export const fetchAllPagesSuccess = (pages: WPPage[]) =>
  Actions.fetchAllPagesSuccess(pages)

export const fetchAllPages = () => async (dispatch: Dispatch) => {
  try {
    dispatch(Actions.fetchAllPagesRequest())
    const pages = await api.wp.getAllPages()
    dispatch(Actions.fetchAllPagesSuccess(pages))
    return pages
  } catch (error) {
    dispatch(Actions.fetchAllPagesFail(error))
    return error
  }
}
