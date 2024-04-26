// import React from 'react'
// import { createRoot } from 'react-dom/client'
// const h1 = <h1>Hello World</h1>
// const root = createRoot(document.getElementById('root'))
// root.render(h1)
// console.log('Hello world!!!')


import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './assets/App'



const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
      <>
  
      <App />
      </> 

    </React.StrictMode>
)