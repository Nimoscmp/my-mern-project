/*::::::::::::::::::::: 
::::  Dependencies ::::
:::::::::::::::::::::::*/

//  React
import { useState } from "react";
//  Routing
import { useHistory } from "react-router-dom";

/*::::::::::::::::::::: 
:::::  Component  :::::
:::::::::::::::::::::::*/

const Login = () => {

    //  Local states
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    //  Destructure object
    const {email, password} = credentials;

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

        //  Redux actions
    }

    //  Routing
    let history = useHistory();

    const registerClick = () => {
        history.push('/register');
    }

    return (
    <>
    <div className="container">
        <main className="row mt-3 d-flex justify-content-center">
            <header className="col-12 p-0">
                <h2 className="text-center">Log in</h2>
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
                            placeholder="Type your email"
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
                            placeholder="Type your password" 
                            className="form-control" 
                            autoComplete=""
                            onChange={handleChange}
                            value={password}/>
                        {/* <i className="fas fa-unlock-alt"></i> */}
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
                    <div className="col-12">
                        <button 
                            type="submit" 
                            className="btn btn-primary w-100 my-1">
                            Sign in
                        </button>

                        <button 
                            type="button" 
                            className="btn btn-outline-secondary w-100 my-1"
                            onClick={registerClick}>
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </main>
    </div>
    </>
    )
}

export default Login
