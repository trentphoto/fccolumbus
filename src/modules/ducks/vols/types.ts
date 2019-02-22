export const FETCH_ALL_VOLS_REQUEST = '@@event/FETCH_ALL_VOLS_REQUEST'
export const FETCH_ALL_VOLS_SUCCESS = '@@event/FETCH_ALL_VOLS_SUCCESS'
export const FETCH_ALL_VOLS_FAIL = '@@event/FETCH_ALL_VOLS_FAIL'

export interface VolState {
  allVols: {
    error: string | null
    loading: boolean
    data: ProcessedVol[]
  }
  vols?: WPNews
}
