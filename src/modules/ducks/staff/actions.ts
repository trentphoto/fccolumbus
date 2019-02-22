import { createAction } from '../../utils/createAction'
import { ActionsUnion } from '../../utils/types'
import * as types from './types'

const fetchAllStaff = {
  fetchAllStaffRequest: () => createAction(types.FETCH_ALL_STAFF_REQUEST),
  fetchAllStaffSuccess: (staff: ProcessedStaff[]) =>
    createAction(types.FETCH_ALL_STAFF_SUCCESS, { staff }),
  fetchAllStaffFail: (error: string) =>
    createAction(types.FETCH_ALL_STAFF_FAIL, { error })
}

export const Actions = {
  ...fetchAllStaff
}

export type Actions = ActionsUnion<typeof Actions>
