import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ShopProvider } from './context/ShopContext.jsx'
import Home from './Home.jsx'
import './index.css'
import Contacts from './Contacts.jsx'
import Products from './Products.jsx'
import Cart from './Cart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'contacts',
    element: <Contacts />
  },
  {
    path: 'products/cars',
    element: <Products>Cars</Products>
  },
  {
    path: 'products/motorcycles',
    element: <Products>Motorcycles</Products>
  },
  {
    path: 'cart',
    element: <Cart />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider>
      <RouterProvider router={router} />
    </ShopProvider>
  </StrictMode>,
)
