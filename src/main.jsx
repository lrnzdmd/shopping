import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ShopProvider } from './context/ShopContext.jsx'
import Home from './Home.jsx'
import './index.css'
import Contacts from './Contacts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'contacts',
    element: <Contacts />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider>
      <RouterProvider router={router} />
    </ShopProvider>
  </StrictMode>,
)
