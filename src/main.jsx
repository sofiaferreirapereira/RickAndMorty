import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import Personagem from './pages/Personagens'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/personagem/:idDoPersonagem', element: <Personagem /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)