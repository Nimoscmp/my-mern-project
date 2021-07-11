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

    //  Local states and constants
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const [validateEmail, setValidateEmail] = useState({
        correct: false,
        empty: false,
        invalid: false,
        exists: false
    })

    const [validatePassword, setValidatePassword] = useState({
        correct: false,
        empty: false,
        noMinChars: false,
        invalid: false
    })

    // eslint-disable-next-line no-control-regex
    const mailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    //  Destructure object
    const { email , password } = credentials;

    //  When change inputs
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })

        if(email.trim().match(mailFormat)){
            setValidateEmail({
                correct: true,
                empty: false,
                invalid: false,
                exists: false
            })
        }

        if (password.trim().length >= 5) {
            setValidatePassword({
                correct: true,
                empty: false,
                noMinChars: false,
                invalid: false
            })
        }
    }

    // Submit form
    const handleSubmit = e => {
        e.preventDefault();

        //  Validate email
        if(email.trim() === ''){
            setValidateEmail({
                correct: false,
                empty: true,
                invalid: false,
                exists: false
            })
        } else if(!email.trim().match(mailFormat)) {
            setValidateEmail({
                correct: false,
                empty: false,
                invalid: true,
                exists: false
            })
        }

        if(password.trim() === '') {
            setValidatePassword({
                correct: false,
                empty: true,
                noMinChars: false,
                invalid: false
            })
        } else if (password.trim().length < 6) {
            setValidatePassword({
                correct: false,
                empty: false,
                noMinChars: true,
                invalid: false
            })
        } else {
            setValidatePassword({
                correct: true,
                empty: false,
                noMinChars: false,
                invalid: false
            })
        }

        //  Redux actions
    }

    //  Blur action
    const blurCapture = () => {

        
    }

    const focusCapture = () => {

                
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
                noValidate
                onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Type your email"
                            className= { validateEmail.correct ? 'form-control is-valid' : validateEmail.invalid || validateEmail.empty ? 'form-control is-invalid' : 'form-control' }
                            aria-describedby="emailHelp"
                            onChange={handleChange}
                            onBlurCapture={blurCapture}
                            onFocusCapture={focusCapture}
                            value={email}/>
                        { 
                        validateEmail.correct ? 
                            <div className="valid-feedback d-block">It looks good</div>
                        :
                        validateEmail.empty ?  
                            <div className="invalid-feedback d-block">You have to fill with an email</div>
                        :
                        validateEmail.invalid ?  
                            <div className="invalid-feedback d-block">This is not a valid email</div>
                        :
                        null
                        }    
                        {/* <div className="invalid-feedback">This email is not valid</div> */}
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Type your password" 
                            className={ validatePassword.correct ? 'form-control is-valid' : validatePassword.empty || validatePassword.noMinChars ? 'form-control is-invalid' : 'form-control'} 
                            autoComplete=""
                            onChange={handleChange}
                            onBlurCapture={blurCapture}
                            value={password}/>
                        { 
                        validatePassword.correct ?
                            <div className="valid-feedback d-block">It looks good</div>
                        :   
                        validatePassword.empty ?
                            <div className="invalid-feedback d-block">You have to fill with a password</div>
                        :
                        validatePassword.noMinChars ?
                            <div className="invalid-feedback d-block">The password must have minimum 6 characters</div>
                        :
                        null
                        }
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
