import api from '../../api'
import { Actions } from './actions'
import { Dispatch } from 'redux'
import { urlBase } from '../../../config'
import sortEventsByDate from '../../utils/sortEventsByDate'

export const fetchAllEventsRequest = () => Actions.fetchAllEventsRequest()
export const fetchAllEventsSuccess = (events: ProcessedEvent[]) =>
  Actions.fetchAllEventsSuccess(events)
export const fetchAllEventsFail = (error: string) =>
  Actions.fetchAllEventsFail(error)

export const fetchAllEvents = () => async (dispatch: Dispatch) => {
  try {
    dispatch(Actions.fetchAllEventsRequest())
    const events = await api.wp.getAllEvents()

    const eventsProcessed = events.map((i: WPEvent) => ({
      title: i.title.rendered,
      id: i.id,
      date: i.acf.date,
      time: i.acf.time,
      location: i.acf.location,
      slug: i.slug,
      content: i.content.rendered,
      excerpt: i.acf.excerpt,
      img: i._embedded
        ? urlBase + i._embedded['wp:featuredmedia'][0].source_url
        : undefined
    }))

    const eventsProcessedSorted = eventsProcessed.sort(sortEventsByDate)

    dispatch(Actions.fetchAllEventsSuccess(eventsProcessedSorted))

    return events
  } catch (error) {
    dispatch(Actions.fetchAllEventsFail(error))
    return error
  }
}
