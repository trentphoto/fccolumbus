import { createAction } from '../../utils/createAction'
import { ActionsUnion } from '../../utils/types'
import * as types from './types'

const fetchAllNews = {
  fetchAllNewsRequest: () => createAction(types.FETCH_ALL_NEWS_REQUEST),
  fetchAllNewsSuccess: (news: ProcessedNews[]) =>
    createAction(types.FETCH_ALL_NEWS_SUCCESS, { news }),
  fetchAllNewsFail: (error: string) =>
    createAction(types.FETCH_ALL_NEWS_FAIL, { error })
}

export const Actions = {
  ...fetchAllNews
}

export type Actions = ActionsUnion<typeof Actions>
