import { fromJS } from 'immutable'

const restaurant = (state = { data: {}, snapshots: [] }, action) => {
  let newState = fromJS(state)
  switch (action.type) {
    case 'RESTAURANT_LIST':
      return newState.setIn(['data'], action.data).toJS()
    case 'SET_RESTAURANT':
      return newState.setIn(['data'], action.data).toJS()
    default:
      return newState.toJS()
  }
}
export default restaurant