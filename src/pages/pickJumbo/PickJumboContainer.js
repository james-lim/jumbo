import { drizzleConnect } from 'drizzle-react'
import PickJumbo from './PickJumbo'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    items: ['sample data 1', 'sample data 2', 'sample data 3'],
  }
}

const PickJumboContainer = drizzleConnect(PickJumbo, mapStateToProps)

export default PickJumboContainer
