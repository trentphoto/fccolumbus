export const FETCH_ALL_NEWS_REQUEST = '@@news/FETCH_ALL_NEWS_REQUEST'
export const FETCH_ALL_NEWS_SUCCESS = '@@news/FETCH_ALL_NEWS_SUCCESS'
export const FETCH_ALL_NEWS_FAIL = '@@news/FETCH_ALL_NEWS_FAIL'

export interface NewsState {
  allNews: {
    error: string | null
    loading: boolean
    data: ProcessedNews[]
  }
  news?: WPNews
}
