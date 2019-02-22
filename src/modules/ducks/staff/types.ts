export const FETCH_ALL_STAFF_REQUEST = '@@event/FETCH_ALL_STAFF_REQUEST'
export const FETCH_ALL_STAFF_SUCCESS = '@@event/FETCH_ALL_STAFF_SUCCESS'
export const FETCH_ALL_STAFF_FAIL = '@@event/FETCH_ALL_STAFF_FAIL'

export interface StaffState {
  allStaff: {
    error: string | null
    loading: boolean
    data: ProcessedStaff[]
  }
  vols?: WPStaff
}
