import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Home from './Components/Home/Home.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <><h1>Error</h1></>,
    children: [
      {
      index:true, element:<><h1>index</h1></>
    },
      {
        path: "/cat1",
        element :<h1>child1</h1>
      },
      {
        path: "/cat2",
        element :<h1>child2</h1>
      },
      {
        path: "/cat3",
        element :<h1>child3</h1>
      },
    ]
  },
  {
    path: "/about",
    element:<><h1>about</h1></>
  },
  {
    path: "/auth",
    element: <><h1>auth</h1></>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
