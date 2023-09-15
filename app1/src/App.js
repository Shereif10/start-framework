import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Layout from './Components/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './Components/Notfound/NotFound'
let routers = createBrowserRouter([
  {path: '' , element:<Layout/> , children : [
    {index:true , element:<Home/>},
    {path:'about' , element:<About/>},
    {path:'portfolio' , element:<Portfolio/>},
    {path:'contact' , element:<Contact/>},
    {path:'*' , element:<NotFound/>}
  ]}
])

export default function App() {
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}
