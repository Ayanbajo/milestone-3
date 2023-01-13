import './/register.css'

function Register() {
  return (
    <div className="register">
      <span className='registerTitle'>Sign Up</span>
      <span className='welcome'>Become a registered member to our webiste.</span>
      <form className='signUpForm'>
              <label>Username</label>
              <input className="registerInput" type="text" placeholder='Enter your Username' />
              <label>Email</label>
              <input className="registerInput" type="text" placeholder='Enter your email' />
              <label>Password</label>
              <input className="registerInput" type='password' placeholder='Enter password' />
              <button className='submitSignUp'>Submit</button>
              <button className='signInButton'>Log In</button>
              
          </form>
   </div>
  )
}

export default Register