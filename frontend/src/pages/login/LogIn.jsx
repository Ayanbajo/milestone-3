import './/login.css'
import Form from 'react-bootstrap/Form';
import { CurrentUser }  from "../../contexts/CurrentUser"
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router"

function LogIn() {

    const navigate = useNavigate()
    
    const { setCurrentUser } = useContext( CurrentUser )

    const [information, setInformation] = useState({
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
  
        e.preventDefault()
        const response = await fetch(`/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(information)
        })

        const data = await response.json()

        if (response.status === 200) {
    
            setCurrentUser(data.user)
            console.log(data.token)
            localStorage.setItem('token', data.token)
            navigate(`/`)
        } else {
            setErrorMessage(data.message)
        }
    }


    return (
        <> 
              {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <div className='form_control'>
                
                <Form className='form_info' onSubmit = {handleSubmit}>
                    <span className='logInTitle'>Log In </span> 
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" required value={information.email} onChange = {e => setInformation({ ...information, email: e.target.value})}
                            name="email"placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required value={information.password} onChange = {e => setInformation({ ...information, password: e.target.value})} 
                            name="email"placeholder="Password" />
                    </Form.Group>
                    
                    <input className="btn btn-primary" type="submit" value="Login" />
                    </Form>
            </div>  
        </>
      );
 
}

export default LogIn