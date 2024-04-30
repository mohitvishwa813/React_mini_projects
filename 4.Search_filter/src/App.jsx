import React from 'react'
import './App.css'
import { useState } from 'react'
import JSONDATA from './MOCK_DATA.json'
export default function App() {
const [seacrhTerm ,setSearchTerm]=useState('')
  return (
<div className="App">
  <input type="text" placeholder='Search....' 
  onChange={(event)=>{
setSearchTerm(event.target.value)
  }}
  
  
  />
  {JSONDATA.filter((val)=>{
    if(seacrhTerm==""){
      return val
    }
else if( val.first_name.toLowerCase().includes(seacrhTerm.toLowerCase())){
  return val
}


  }).map((val,key)=>{
    return (
    <div className='user' key={key}> 
       {val.first_name}
       </div>
       );
  })}
</div>
  )
}
