import React from 'react'
import Hero from './Hero/Hero'
import Featured from './featured/Featured'
import Recent from './recent/Recent'
import Awards from './awards/Awards'
import Location from './location/Location'
import Price from './price/Price'


const Home = () => {
  return (
    <>
        <Hero />
        <Featured/>
        <Recent/>
        <Awards/>
        <Location/>
        <Price/>
        

    </>
  )
}

export default Home