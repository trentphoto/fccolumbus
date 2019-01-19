export const FETCH_ALL_EVENTS_REQUEST = '@@event/FETCH_ALL_EVENTS_REQUEST'
export const FETCH_ALL_EVENTS_SUCCESS = '@@event/FETCH_ALL_EVENTS_SUCCESS'
export const FETCH_ALL_EVENTS_FAIL = '@@event/FETCH_ALL_EVENTS_FAIL'

export interface EventState {
  allEvents: {
    error: string | null
    loading: boolean
    data: ProcessedEvent[]
  }
  events?: WPEvent
}
