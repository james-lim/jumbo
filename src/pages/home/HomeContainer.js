import Home from './Home'
import React from 'react'
import { drizzleConnect } from 'drizzle-react'


// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    threeJumbos: state.restaurant.threeJumbos,
    twoJumbos: state.restaurant.twoJumbos,
    oneJumbos: state.restaurant.oneJumbos,
    korean: state.restaurant.korean,
    japanese: state.restaurant.japanese,
    chinese: state.restaurant.chinese,
  }
}

const HomeContainer = drizzleConnect(Home, mapStateToProps)

export default HomeContainer
