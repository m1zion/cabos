import React, { Suspense, lazy } from 'react'
import Hero from '../../Components/Hero'
import Footer from '../../Components/Footer'
import Layout from '../../Components/Layout'
import About from '../../Components/About'
// Lazy load for animations/scroll-sensitive components
const Tours = lazy(() => import('../../Components/Tours'))
const Experiences = lazy(() => import('../../Components/Experiences'))
const Accomodation = lazy(() => import('../../Components/Accomodation'))
const Restaurants = lazy(() => import('../../Components/Restaurants'))
const Transportation = lazy(() => import('../../Components/Transportation'))

function Home() {  
  const currentPath = window.location.pathname;
  return (
    <Layout>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <About/>
        <Accomodation />
        <Tours />
        <Restaurants/>        
        <Transportation/>
      </Suspense>
      <Footer />
         
    </Layout>
  )
}
export default Home
