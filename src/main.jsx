import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import Router from '../Router/routes.jsx'
import Provider from '../Authentication/Provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider>
  <RouterProvider router={Router}>
      
      </RouterProvider>
  </Provider>
  </StrictMode>,
)
