import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Banner from '../../components/Banner/Banner' 
import RowList from '../../components/Rows/RowList/RowList'
function Home() {
  return ( 
    <>
        <Header />
        <Banner />
        <RowList/>
        <Footer/>
    </>
  )
}

export default Home