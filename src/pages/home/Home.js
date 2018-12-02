import React from 'react'
import JumboLayout from '../../layouts/JumboLayout'
import StoreCarousel from '../../components/StoreCarousel'



const Home = ({ threeJumbos, twoJumbos, oneJumbos, korean, japanese, chinese }) => {
  return (
    <JumboLayout>
      <StoreCarousel name={'3 Jumbo restaurants'} restaurants={threeJumbos}/>
      <StoreCarousel name={'2 Jumbo restaurants'} restaurants={twoJumbos}/>
      <StoreCarousel name={'1 Jumbo restaurants'} restaurants={oneJumbos}/>
      <StoreCarousel name={'Korean restaurants'} restaurants={oneJumbos}/>
      <StoreCarousel name={'Japanese restaurants'} restaurants={korean}/>
      <StoreCarousel name={'Chinese restaurants'} restaurants={japanese}/>
      <StoreCarousel name={'Western restaurants'} restaurants={chinese}/>
    </JumboLayout>
  )
}

export default Home
