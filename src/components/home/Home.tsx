import React, { useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Research from '../Research/Research'
import Advisory from '../Advisory/Advisory'
import Features from '../Features/Features'
import Main from '../Main/Main'
import ScrollAnimationComponent from '../scroller/Scroller'
import Overview from '../Overview/Overview'
import { Stickynav } from '../Stickynav/Stickynav'
import EmblaCarouselHome from '../Carousel/verticalHome/EmblaCarouselHome'
import { EmblaOptionsType } from 'embla-carousel'
import '@/components/Carousel/verticalHome/css/emblahome.css'
import LeftCard from '../Tools&Features/LeftCard'
import RightCard from '../Tools&Features/RightCard'
import LastCard from '../Tools&Features/LastCard'
import HomeRightCard from '../Tools&Features/HomeRightCard'
import HomeLastCard from '../Tools&Features/HomeLastCard'
import HomeLeftCard from '../Tools&Features/HomeLeftCard'
const OPTIONS: EmblaOptionsType = { axis: 'y' }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

interface DataLeftProps {
  title: string;
  description: string;
  content: string;
}
const DataLeft:DataLeftProps = {
  title: "Tools & Features",
  description: "Assess and Elevate Your Organizational Maturity",
  content: "Based on extensive research and in consultation with industry experts, our assessments assess various mental model, job holder maturity, team dynamics, organization agility & leadership relevant parameters. These assessments are available in our online platform. On completion of the same, a professional report with an overview of capability gaps and strengths is sent to the respondent."
}
interface ContentItem {
  title: string;
  description: string;
}

interface RightProps {
  title: string;
  description: string;
  content: ContentItem[];
}

const DataRight:RightProps = {
  title: "Immersive Business simulations",
  description: "The Iceberg Model and Maturity at Different Levels",
  content: [
      {
          title: "The Iceberg Model",
          description: " Uncover hidden organizational dynamics, from surface events to deep-rooted challenges, with our Iceberg Model for organizational maturity."
      },
      {
          title: "Maturity at Different Levels",
          description: "Evaluate your organization’s progress across leadership, team performance, and structural maturity."
      },
  ]
}

const DataLast:RightProps = {
  title: "On-demand research & consultation",
  description: "Comprehensive Reports and Learning Journey",
  content: [
      {
          title: "Gap Assessment and Learning Journey",
          description: "Identify critical gaps within your organization and embark on a tailored learning journey to bridge these gaps effectively."
      },
  ]
}



function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <Stickynav/>
      <div id="table-of-contents" className='py-10 lg:py-20 '>
      <EmblaCarouselHome  slides={[
      <HomeLeftCard data={DataLeft}  />,
      <HomeRightCard data={DataRight} />,
      <HomeLastCard data={DataLast} />,
    ]} options={OPTIONS} />
      </div>
      <div id="screencasts" className=' py-10 lg:py-20'>
      <EmblaCarouselHome  slides={[
      <HomeLeftCard data={DataLeft}  />,
      <HomeRightCard data={DataRight} />,
      <HomeLastCard data={DataLast} />,
    ]} options={OPTIONS} />
      </div>
      <div id="resources" className='py-10 lg:py-20'>
      <EmblaCarouselHome  slides={[
      <HomeLeftCard data={DataLeft}  />,
      <HomeRightCard data={DataRight} />,
      <HomeLastCard data={DataLast} />,
    ]} options={OPTIONS} />
      </div>
      <div id="pricing" className='py-10 lg:py-20'>
      <EmblaCarouselHome  slides={[
      <HomeLeftCard data={DataLeft}  />,
      <HomeRightCard data={DataRight} />,
      <HomeLastCard data={DataLast} />,
    ]} options={OPTIONS} />
      </div>
      {/* <ScrollAnimationComponent/> */}
    <div id="feature">

      <Features  />
    </div>

      <Advisory/>
      <Research/>
      <Footer/>
    </div>
  )
}

export default Home



