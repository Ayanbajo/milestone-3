import './/login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LogIn() {
    return (
        <> 
            <div className='form_control'>
                <span className='logInTitle'>Log In </span> 
                <Form className='form_info'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
            </div>  
        </>
      );
 
}

export default LogIn