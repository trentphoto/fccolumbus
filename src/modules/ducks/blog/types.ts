export const FETCH_ALL_POSTS_REQUEST = '@@blog/FETCH_ALL_POSTS_REQUEST'
export const FETCH_ALL_POSTS_SUCCESS = '@@blog/FETCH_ALL_POSTS_SUCCESS'
export const FETCH_ALL_POSTS_FAIL = '@@blog/FETCH_ALL_POSTS_FAIL'

export interface BlogState {
  allPosts: {
    error: string | null
    loading: boolean
    data: ProcessedNews[]
  }
  posts?: WPPost
}
