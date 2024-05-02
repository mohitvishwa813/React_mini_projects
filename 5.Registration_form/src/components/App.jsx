import React, { useState } from "react";
import "./App.css";
export default function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

const [submitted,setSubmitted]=useState(false);

const [valid ,setValid]=useState(false)

const handleSumbit=(event)=>{
  event.preventDefault();
  if(values.firstname && values.lastname &&values.email){
    setValid(true)
  }
  setSubmitted(true)
}


  const handleFirstNameInputchange = (event) => {
    setValues({ ...values, firstname: event.target.value });
  };
  const handlelastNameInputchange = (event) => {
    setValues({ ...values, lastname: event.target.value });
  };
  const handleEmailInputchange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSumbit}>
      {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> :null}
        <input
          onChange={handleFirstNameInputchange}
          value={values.firstname}
          type="text"
          id="first-name"
          className="form-field"
          placeholder="first Name"
          name="firstname"
       
     />
  {submitted && !values.firstname ?<span>please enter first name </span>: null}
        <input
          onChange={handlelastNameInputchange}
          value={values.lastname}
          type="text"
          id="last-name"
          className="form-field"
          placeholder="last Name"
          name="lastname"
        />
  {submitted && !values.lastname ?<span>please enter last name </span>: null}
        <input
          onChange={handleEmailInputchange}
          value={values.email}
          type="email"
          id="email"
          className="form-field"
          placeholder="Email"
          name="Email"
        />
  {submitted && !values.email ?<span>please enter email </span>: null}
        <button  class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
