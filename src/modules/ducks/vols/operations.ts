import api from '../../api'
import { Actions } from './actions'
import { Dispatch } from 'redux'
import { urlBase } from '../../../config'

export const fetchAllVolsRequest = () => {
  Actions.fetchAllVolsRequest()
}
export const fetchAllVolsSuccess = (vols: ProcessedVol[]) =>
  Actions.fetchAllVolsSuccess(vols)
export const fetchAllVolsFail = (error: string) => {
  Actions.fetchAllVolsFail(error)
}

export const fetchAllVols = () => async (dispatch: Dispatch) => {
  try {
    dispatch(Actions.fetchAllVolsRequest())
    const vols = await api.wp.getAllVols()

    const volsProcessed = vols.map((i: WPEvent) => ({
      title: i.title.rendered,
      id: i.id,
      slug: i.slug,
      content: i.content.rendered,
      excerpt: i.acf.excerpt,
      img: i._embedded
        ? urlBase + i._embedded['wp:featuredmedia'][0].source_url
        : ''
    }))

    dispatch(Actions.fetchAllVolsSuccess(volsProcessed))

    return vols
  } catch (error) {
    dispatch(Actions.fetchAllVolsFail(error))
    return error
  }
}
