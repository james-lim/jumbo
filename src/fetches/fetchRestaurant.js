import { updateRestaurant } from '../actions/restaurant'

export const fetchRestaurant = (drizzle) => async (dispatch) => {
  let restaurant = await drizzle.contracts.JumbosGuide.methods.getRestaurant().call('0x')
  dispatch(updateRestaurant(restaurant))
}