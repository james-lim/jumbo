import React from 'react'
import JumboLayout from '../../layouts/JumboLayout'
import StoreCarousel from '../../components/StoreCarousel'

const Home = ({ jumbo, threeJumbos, twoJumbos, oneJumbos, korean, japanese, chinese }) => {
  return (
    <JumboLayout jumbo={'black'}>
      <StoreCarousel name={'3 Jumbo restaurants'} restaurants={threeJumbos}/>
      <StoreCarousel name={'2 Jumbo restaurants'} restaurants={twoJumbos}/>
      <StoreCarousel name={'1 Jumbo restaurants'} restaurants={oneJumbos}/>
    </JumboLayout>
  )
}

export default Home
