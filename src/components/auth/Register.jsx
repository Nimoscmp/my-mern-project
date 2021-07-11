/*::::::::::::::::::::: 
::::  Dependencies ::::
:::::::::::::::::::::::*/

//  React
import { useEffect, useState } from "react";
//  Routing
import { Link } from "react-router-dom";

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

    const [validateEmail, setValidateEmail] = useState({
        correct: false,
        empty: false,
        invalid: false,
        exists: false
    });

    const [validatePassword, setValidatePassword] = useState({
        correct: false,
        empty: false,
        noMinChars: false,
        invalid: false
    });

    const [validateConfirmPassword, setValidateConfirmPassword] = useState({
        correct: true,
        empty: true
    });

    //  Destructure object
    const {email, password, confirmPassword} = credentials;

    //  Validate confirm password
    useEffect(() => {

        if(confirmPassword.trim() === password.trim() && confirmPassword.length >= 6) {
            setValidateConfirmPassword({
                correct: true,
                empty: false
            });
        } else {
            setValidateConfirmPassword({
                correct: true,
                empty: true
            });
        }
    }, [password, confirmPassword])

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

    // eslint-disable-next-line no-control-regex
    const mailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    // Submit form
    const handleSubmit = e => {
        e.preventDefault();

        //  Validate inputs
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
        } else if (password.length < 6) {
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
        
        //  Check confirm password
        if (confirmPassword === '') {
            setValidateConfirmPassword({
                correct: false,
                empty: true
            });
        } else if (confirmPassword !== password) {
            setValidateConfirmPassword({
                correct: false,
                empty: false
            });
        }

        //  Check minimal requirements


        //  Redux actions
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
                noValidate
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
                            className={ validateEmail.correct ? 'form-control is-valid' : validateEmail.invalid || validateEmail.empty ? 'form-control is-invalid' : 'form-control' }
                            aria-describedby="emailHelp"
                            onChange={handleChange}
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
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Type a password" 
                            className={ validatePassword.correct ? 'form-control is-valid' : validatePassword.empty || validatePassword.noMinChars ? 'form-control is-invalid' : 'form-control'}
                            autoComplete="off"
                            onChange={handleChange}
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
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            id="confirmPassword"
                            placeholder="Confirm your password" 
                            className={ validateConfirmPassword.correct && validateConfirmPassword.empty ? 'form-control' : validateConfirmPassword.correct ? 'form-control is-valid' : 'form-control is-invalid'}
                            autoComplete="off"
                            onChange={handleChange}
                            value={confirmPassword}/>
                        { 
                        validateConfirmPassword.correct && validateConfirmPassword.empty ?
                            null
                        :
                        validateConfirmPassword.correct && !validateConfirmPassword.empty?
                            <div className="valid-feedback d-block">Correct</div>
                        :   
                        !validateConfirmPassword.correct && validateConfirmPassword.empty?
                            <div className="invalid-feedback d-block">You have to confirm your password</div>
                        :
                            <div className="invalid-feedback d-block">Incorrect</div>
                        }
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
                            &lt;&lt; Go back to log in
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
