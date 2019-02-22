import { PageState } from '../modules/ducks/pages/types'
import { NewsState } from '../modules/ducks/news/types'
import { EventState } from '../modules/ducks/events/types'
import { TestimonialState } from '../modules/ducks/testimonials/types'
import { LayoutState } from '../modules/ducks/layout/types'
import { BlogState } from '../modules/ducks/blog/types'
import { VolState } from '../modules/ducks/vols/types'
import { StaffState } from '../modules/ducks/staff/types'

declare interface ReduxState {
  pages: PageState
  news: NewsState
  events: EventState
  testimonials: TestimonialState
  layout: LayoutState
  blogs: BlogState
  vols: VolState
  staff: StaffState
}
