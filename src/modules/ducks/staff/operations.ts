import api from '../../api'
import { Actions } from './actions'
import { Dispatch } from 'redux'
import { urlBase } from '../../../config'

export const fetchAllStaffRequest = () => Actions.fetchAllStaffRequest()
export const fetchAllStaffSuccess = (staff: ProcessedStaff[]) =>
  Actions.fetchAllStaffSuccess(staff)
export const fetchAllStaffFail = (error: string) =>
  Actions.fetchAllStaffFail(error)

export const fetchAllStaff = () => async (dispatch: Dispatch) => {
  try {
    dispatch(Actions.fetchAllStaffRequest())
    const staff = await api.wp.getAllStaff()

    const staffProcessed = staff.map((i: WPStaff) => ({
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

    dispatch(Actions.fetchAllStaffSuccess(staffProcessed))

    return staff
  } catch (error) {
    dispatch(Actions.fetchAllStaffFail(error))
    return error
  }
}
