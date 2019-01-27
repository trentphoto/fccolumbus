import { createAction } from '../../utils/createAction'
import { ActionsUnion } from '../../utils/types'
import * as types from './types'

const layoutEvents = {
  openSearch: () => createAction(types.OPEN_SEARCH),
  closeSearch: () => createAction(types.CLOSE_SEARCH),
  openMenu: () => createAction(types.OPEN_MENU),
  closeMenu: () => createAction(types.CLOSE_MENU)
}

export const Actions = {
  ...layoutEvents
}

export type Actions = ActionsUnion<typeof Actions>
