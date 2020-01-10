import { INIT_RECOED, ADD_RECOED } from "./action-type";

export function records(state, action) {
  if (!state) {
    state = { records: [] }
  }

  switch (action.type) {
    case 'INIT_RECOED':
      return { records: action.records }
    case 'ADD_RECOED':
      return [...state.records, action.records]
    default:
      return state
  }

}