import React from 'react'
import Head from './component/header/head'
import Hero from './component/hero/hero'
import Course from './component/course/course'
import Achieve from './component/achivement/achieve'
import Ourcourse from "./component/ourcourses/ourcourse"
import Ourteam from './component/ourteam/ourteam'
import Head1 from './component/head1/head1'


const page = () => {
  return (
    <div  >
      <Head1/>
      <Head/>
      <Hero/>
      <Course/>
      <Achieve/>
      <Ourcourse/>
      <Ourteam/>
      
      
      
    </div>
  )
}

export default page
