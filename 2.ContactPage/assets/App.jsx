import React from 'react'
import './App.css'
import Navigation from '../components/Navigation'
import ContactHeader from '../components/ContactHeader/ContactHeader'
import ContactForm from '../components/ContactForm/ContactForm'

export default function App() {
  return (
    <>
<div className="container">
  <Navigation />
  <ContactHeader />
<ContactForm />
  </div>
  </>

  )
}
