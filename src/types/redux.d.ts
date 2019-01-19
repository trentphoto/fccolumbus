import { PageState } from '../modules/ducks/pages/types'
import { NewsState } from '../modules/ducks/news/types'
import { EventState } from '../modules/ducks/events/types'

declare interface ReduxState {
  pages: PageState
  news: NewsState
  events: EventState
}
