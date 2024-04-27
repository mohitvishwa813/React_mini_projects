import React from 'react'
import '../assets/App.css'
import styles from './Navigation/Navigation.module.css'

export default function Navigation() {
  return (

 <div className={`${styles.nav}`}>

 <div className="logo">
        <img src="https://github.com/anshuopinion/React-10-Projects/blob/project-2/project-2/public/images/logo.png?raw=true" alt="" />
    </div>
<ul>
    <li href="#">Home</li>
    <li href="#">About</li>
    <li href="#">Contact</li>
</ul>
 </div>
  


  )
}


