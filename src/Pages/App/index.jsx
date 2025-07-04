import { useState } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import './App.css'
import NavBar from '../../Components/NavBar/'

import Footer from '../../Components/Footer'
import Home from '../Home/'
import NotFound from '../NotFound/'
import Accommodation from '../Accommodation/'
const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/',  element: <Home/> },
    { path: '/Accommodation/:id',  element: <Accommodation/> },
    { path: '/*',  element: <NotFound/> },
  ]);
  return routes;
};
const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter >
        <AppRoutes/>
        <NavBar/>
        <Footer />
      </BrowserRouter> 
    </ShoppingCartProvider>
  )
}
export default App

      {/*basename={import.meta.env.BASE_URL}*/}