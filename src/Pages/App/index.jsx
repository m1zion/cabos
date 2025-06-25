import { useState } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import './App.css'
import NavBar from '../../Components/NavBar/'
import Home from '../Home/'
import NotFound from '../NotFound/'
const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/',  element: <Home/> },
    { path: '/*',  element: <NotFound/> },
  ]);
  return routes;
};
const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppRoutes/>
        <NavBar/>
      </BrowserRouter> 
    </ShoppingCartProvider>
  )
}
export default App
