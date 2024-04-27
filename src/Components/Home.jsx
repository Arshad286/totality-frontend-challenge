import React from 'react'
import HeroSection from '../SubComponents/HeroSection'
import TopVillas from '../SubComponents/TopVillas'
import Regions from '../SubComponents/Regions'
import OurSpecialities from '../SubComponents/OurSpecialities'
import Host from '../SubComponents/Host'
import About from '../SubComponents/About'
import Contact from '../SubComponents/Contact'


function Home() {
  return (
    <div>
        <article className='page' >
          <HeroSection/>
          <TopVillas/>
          <Regions/>
          <OurSpecialities/>
          <Host/>
          <About/>
          <Contact/>
        </article>
    </div>
  )
}

export default Home