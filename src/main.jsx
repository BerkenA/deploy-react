import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/test", element: <h1>Test path</h1>}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
