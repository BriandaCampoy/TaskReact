import React, { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/useAuthContext';
import Redirect from '../../components/HOC/Redirect';

/**
 * SignIn Component
 * This component provides a user interface for users to sign in with their credentials.
 *
 * @returns {JSX.Element} The JSX element representing the SignIn component.
 */
const SignIn = () => {
  const { login } = useAuthContext();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [errorFlag, setErrorFlag] = useState('');

  /**
   * Handles the form submission for user authentication.
   * @param {Event} event - The form submission event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await login(email.current.value, password.current.value);
    if (result) {
      navigate('/');
    } else {
      setErrorFlag('Invalid credentials');
    }
  };

  return (
    <Redirect>
      <div className="container">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="email"
                            ref={email}
                            required
                            name="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            required
                            minLength="6"
                            ref={password}
                            name="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group row">
                          {errorFlag !== '' && (
                            <span className="alert alert-danger text-center mx-auto my-1 px-3 btn-user w-75">
                              {errorFlag}
                            </span>
                          )}
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>
                      </form>
                      <hr />
                      <div className="text-center">
                        <NavLink className="small" to="/register">
                          Create an Account!
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Redirect>
  );
};

export default SignIn;
