import React from 'react';
import { useNavigate } from 'react-router-dom';
import './/register.css'
import { useState} from 'react';

function Register() {

  const navigate = useNavigate();
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reload = async () => {
    navigate("/")
    const data =  fetch("http://localhost:3001/users", requestOptions)
// const cleanData = data.json();
//   console.log("Did you save?", cleanData);
  }

  // const handleSave = async () => {
  //     console.log("Is this working?")
  //   navigate("/");
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
      }),
  };


  return (
    <div className="register">
      <span className='registerTitle'>Sign Up</span>
      <span className='welcome'>Become a registered member to our website.</span>
      <form className='signUpForm'>
              <label>First Name</label>
        <input className="registerInput"
            type="text"
            onChange={(e) => {setFirst_Name(e.target.value);
                      }}
            value={first_name}placeholder='Enter your First Name' />
        <label>Last Name</label>
        <input className="registerInput" type="text"
          onChange={(e) => {
            setLast_Name(e.target.value);
        }}
        value={last_name}
          placeholder='Enter your Last Name' />
              <label>Email</label>
        <input className="registerInput" type="text"
          onChange={(e) => {
            setEmail(e.target.value);
        }}
        value={email}placeholder='Enter your email' />
              <label>Password</label>
        <input className="registerInput" type='password'
          onChange={(e) => {
            setPassword(e.target.value);
        }}
          value={password} placeholder='Enter password' />
        

        <button onClick={reload} type="submit" className='submitSignUp'>Submit</button>
              {/* <button className='signInButton'>Log In</button> */}
        
          </form>
   </div>
  )
};

export default Register