import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar1 from '../components/Navbar1'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Margin } from '@mui/icons-material'
import Testimonial from '../components/Testimonial'
import { Help } from '../components/Help'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar1/>
      <Slider/>
      <Categories/>
      {/* <Products/> */}
      <Testimonial/>
      <Help/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home