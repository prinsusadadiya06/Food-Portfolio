import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './Home'
import About from './About'
import Books from './Books'
import Portfolio from './Portfolio'
import Blog from './Blog'
import Contact from './Contact'
import Clientalbums from './Clientalbums'
import Editorial from './Editorial'


let allpages = createBrowserRouter([

  {
    path: "/",
    element: <Home />
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/books",
    element: <Books />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/client",
    element: <Clientalbums />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/Editorial/:id",
    element: <Editorial />
  },
],
  {
    basename: "/FoodPortfolio"   
  })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allpages} />
  </StrictMode>,
)
