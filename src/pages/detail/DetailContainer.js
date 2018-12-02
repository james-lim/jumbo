import { drizzleConnect } from 'drizzle-react'
import Detail from './Detail'
import { fetchRestaurant } from '../../fetches/fetchRestaurant'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = (state, ownProps) => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    address:  ownProps.match.params.address
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurant: drizzle => dispatch(fetchRestaurant(drizzle))
})


const DetailContainer = drizzleConnect(Detail, mapStateToProps)

export default DetailContainer
