import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Redirect from '../../components/HOC/Redirect';

const Register = () => {
  const [errorFlag, setErrorFlag] = useState('');
  const fullName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmedPassword = useRef();
  const handleSubmitRegister = (event) => {
    event.preventDefault();
    if (confirmedPassword.current.value !== password.current.value) {
      setErrorFlag('Passwords must match');
    } else {
      setErrorFlag('');
    }
  };

  return (
    <Redirect>
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* <!-- Nested Row within Card Body --> */}
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Create an Account!
                    </h1>
                  </div>
                  <form className="user" onSubmit={handleSubmitRegister}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        ref={fullName}
                        required
                        // [(ngModel)]="newUser.name"
                        className="form-control form-control-user"
                        id="exampleFirstName"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        ref={email}
                        required
                        // [(ngModel)]="newUser.email"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="password"
                          name="password"
                          ref={password}
                          minLength="6"
                          required
                          // [(ngModel)]="newUser.password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="password"
                          name="passwordConfirmation"
                          ref={confirmedPassword}
                          minLength="6"
                          required
                          // [(ngModel)]="newUser.confirmedPassword"
                          className="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Repeat Password"
                        />
                      </div>
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
                      Register Account
                    </button>
                  </form>
                  <hr />
                  <div className="text-center">
                    <NavLink className="small" to="../login">
                      Already have an account? Login!
                    </NavLink>
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

export default Register;
