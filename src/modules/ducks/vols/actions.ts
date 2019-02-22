import { createAction } from '../../utils/createAction'
import { ActionsUnion } from '../../utils/types'
import * as types from './types'

const fetchAllVols = {
  fetchAllVolsRequest: () => createAction(types.FETCH_ALL_VOLS_REQUEST),
  fetchAllVolsSuccess: (vols: ProcessedVol[]) =>
    createAction(types.FETCH_ALL_VOLS_SUCCESS, { vols }),
  fetchAllVolsFail: (error: string) =>
    createAction(types.FETCH_ALL_VOLS_FAIL, { error })
}

export const Actions = {
  ...fetchAllVols
}

export type Actions = ActionsUnion<typeof Actions>
