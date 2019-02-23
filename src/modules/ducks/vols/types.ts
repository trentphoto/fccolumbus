export const FETCH_ALL_VOLS_REQUEST = '@@vols/FETCH_ALL_VOLS_REQUEST'
export const FETCH_ALL_VOLS_SUCCESS = '@@vols/FETCH_ALL_VOLS_SUCCESS'
export const FETCH_ALL_VOLS_FAIL = '@@vols/FETCH_ALL_VOLS_FAIL'

export interface VolState {
  allVols: {
    error: string | null
    loading: boolean
    data: ProcessedVol[]
  }
  vols?: WPEvent
}
