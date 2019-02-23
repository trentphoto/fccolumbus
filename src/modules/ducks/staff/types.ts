export const FETCH_ALL_STAFF_REQUEST = '@@staff/FETCH_ALL_STAFF_REQUEST'
export const FETCH_ALL_STAFF_SUCCESS = '@@staff/FETCH_ALL_STAFF_SUCCESS'
export const FETCH_ALL_STAFF_FAIL = '@@staff/FETCH_ALL_STAFF_FAIL'

export interface StaffState {
  allStaff: {
    error: string | null
    loading: boolean
    data: ProcessedStaff[]
  }
  vols?: WPStaff
}
