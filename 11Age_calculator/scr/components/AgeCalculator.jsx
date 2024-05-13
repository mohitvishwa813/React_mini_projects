import React, { useState } from 'react'
import './AgeCalculator.css'
export default function AgeCalculator() {

const [age,setAge]=useState(0)
const [input,setinput]=useState('')
const handleInputBirthday=(event)=>{
  const inputValue=event.target.value
  setinput(inputValue)
  console.log(inputValue)
}
const calculateAge=()=>{
const currentDate=new Date();
const birthDate=new Date(input)
const ageDiff=currentDate.getFullYear()-birthDate.getFullYear();
setAge(ageDiff)
}

const reset=()=>{
  setAge(0);
  setinput('')
}




  return (
<div className="container">
    <h2 className="heading container_title"> Age calculator</h2>
    <p className="para container_title">The Age calculator determine your age</p>
<div className="container_middle">


<div className="left">
<h2>Date of birth</h2>
<input type="date" className="data" value={input}onChange={handleInputBirthday}/>
<div className="button_div">
<button className='button_calc' onClick={calculateAge}>Calculate Age</button>
<button className='button_reset' onClick={reset}> reset</button>
</div>


</div>

<div className="right">
<div className="middle">
    <h2>Your Age is :</h2>
</div>
<h2 className="result">{age}</h2>
</div>


</div>


</div>
  )
}
