export const FETCH_ALL_NEWS_REQUEST = '@@staff/FETCH_ALL_NEWS_REQUEST'
export const FETCH_ALL_NEWS_SUCCESS = '@@staff/FETCH_ALL_NEWS_SUCCESS'
export const FETCH_ALL_NEWS_FAIL = '@@staff/FETCH_ALL_NEWS_FAIL'

export interface StaffState {
  allStaff: {
    error: string | null
    loading: boolean
    data: ProcessedStaff[]
  }
  staff?: WPStaff
}
