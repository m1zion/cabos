import React, { Suspense, lazy, useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import Cabos from '../../Components/Cabos'
import About from '../../Components/About'
import Places from '../../Components/Places'
import WhatsApp from '../../Components/WhatsApp';
import { Helmet } from "react-helmet-async";
const Tours = lazy(() => import('../../Components/Tours'))
const Experiences = lazy(() => import('../../Components/Experiences'))
const Restaurants = lazy(() => import('../../Components/Restaurants'))
const Accomodation = lazy(() => import('../../Components/Accomodation'))
const Transportation = lazy(() => import('../../Components/Transportation'))
function Home() {  
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay helps when switching routes
      }
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title>Los Cabos Tours | Experiences, Restaurants & Travel</title>
        <meta 
          name="description" 
          content="Discover the best tours, experiences, restaurants and transportation in Los Cabos. Book your perfect trip easily and safely." 
        />
        <meta name="keywords" content="Los Cabos tours, Cabo experiences, Cabo restaurants, transportation Cabo" />
        <html lang="en" />
      </Helmet>
      <Cabos/>
      <Suspense fallback={<div>Loading...</div>}>
        <About/>
        <Places/>
        <Tours />
        <Experiences />
        {/*<Medical/>*/}
        <Accomodation/>
        <Restaurants/>     
        <Transportation/>
        <WhatsApp/>
      </Suspense>
    </>
  )
}
export default Home