import { drizzleConnect } from 'drizzle-react'
import PickJumbo from './PickJumbo'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    items: [
      { src: 'images/baseball_d.png', score: 312, description: '' },
      { src: 'images/big_d.png', score: 44, description: '' },
      { src: 'images/spotted_d.png', score: 12, description: '' },
      { src: 'images/stripe_d.png', score: 6, description: '' },
    ],
  }
}

const PickJumboContainer = drizzleConnect(PickJumbo, mapStateToProps)

export default PickJumboContainer
