import Home from './Home'
import React from 'react'
import { drizzleConnect } from 'drizzle-react'


// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    jumbo: state.contracts.MyJumbo,
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    threeJumbos: state.restaurant.threeJumbos,
    twoJumbos: state.restaurant.twoJumbos,
    oneJumbos: state.restaurant.oneJumbos,
  }
}

const HomeContainer = drizzleConnect(Home, mapStateToProps)

export default HomeContainer
