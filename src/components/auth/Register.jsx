/*::::::::::::::::::::: 
::::  Dependencies ::::
:::::::::::::::::::::::*/

//  React
import { useState } from "react";
//  Routing
import { Link, useHistory } from "react-router-dom";

/*::::::::::::::::::::: 
:::::  Component  :::::
:::::::::::::::::::::::*/

const Register = () => {

    //  Local states
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    //  Destructure object
    const {email, password, confirmPassword} = credentials;

    //  When change inputs
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    // Submit form
    const handleSubmit = e => {
        e.preventDefault();

        //  Validate inputs
        if(email.trim() === '' || password.trim() === ''){

        }

        //  Check minimal requirements

        //  Check confirm password

        //  Redux actions
    }

    //  Routing
    let history = useHistory();

    const registerClick = () => {
        history.push('/register');
    }

    //  Register action
    const handleRegister = () => {

    }

    return (
    <>
    <div className="container">
        <main className="row mt-3 d-flex justify-content-center">
            <header className="col-12 p-0">
                <h2 className="text-center">Register</h2>
            </header>
            <form 
                action="" 
                className="col-10 col-sm-8 col-md-6 col-lg-5"
                onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Type an email"
                            className="form-control" 
                            aria-describedby="emailHelp"
                            onChange={handleChange}
                            value={email}/>
                        <div id="emailHelp" className="form-text">We will not share your email</div>
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Type a password" 
                            className="form-control" 
                            autoComplete="off"
                            onChange={handleChange}
                            value={password}/>
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            id="confirmPassword"
                            placeholder="Confirm your password" 
                            className="form-control" 
                            autoComplete="off"
                            onChange={handleChange}
                            value={confirmPassword}/>
                    </div>

                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
                    <div className="col-12">
                        <button 
                            type="submit" 
                            className="btn btn-primary w-100 my-1"
                            onClick={handleRegister}>
                            Register
                        </button>

                        <Link to={'/login'} className="text-decoration-none">
                            Go back to log in
                        </Link>
                    </div>
                </div>
            </form>
        </main>
    </div>
    </>
    )
}

export default Register
