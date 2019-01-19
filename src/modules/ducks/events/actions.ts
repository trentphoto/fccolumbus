import { createAction } from '../../utils/createAction'
import { ActionsUnion } from '../../utils/types'
import * as types from './types'

const fetchAllEvents = {
  fetchAllEventsRequest: () => createAction(types.FETCH_ALL_EVENTS_REQUEST),
  fetchAllEventsSuccess: (events: ProcessedEvent[]) =>
    createAction(types.FETCH_ALL_EVENTS_SUCCESS, { events }),
  fetchAllEventsFail: (error: string) =>
    createAction(types.FETCH_ALL_EVENTS_FAIL, { error })
}

export const Actions = {
  ...fetchAllEvents
}

export type Actions = ActionsUnion<typeof Actions>
