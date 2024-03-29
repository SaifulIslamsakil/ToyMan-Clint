import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Route/Routes'
import Provider from './Provider/Provider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' max-w-7xl mx-auto'>
      <Provider>
        <RouterProvider router={Routes}>

        </RouterProvider>
      </Provider>
    </div>
  </React.StrictMode>,
)
