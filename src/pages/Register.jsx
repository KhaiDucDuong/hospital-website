import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Register() {
  return (
    <>

      <Header />

      {/* Page Content */}
      <div className="content" style={{ padding:"125px"}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Register Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src="../img/login-banner.png"
                      className="img-fluid"
                      alt="Doccure Register"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <h4>Register</h4>
                    {/* Register Form */}
                    <form action="https://dreamguys.co.in/demo/doccure/doctor-dashboard.html">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Full Name</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Phone Number</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Date Of Birth</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Gender</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Username</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="password" className="form-control floating" />
                        <label className="focus-label">Password</label>
                      </div>
                      <div className="text-right">
                        <a className="forgot-link" href="/login">
                          Already have an account?
                        </a>
                      </div>
                      <button
                        className="btn btn-primary btn-block btn-lg login-btn"
                        type="submit"
                      >
                        Signup
                      </button>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <a href="#" className="btn btn-facebook btn-block">
                            <i className="fab fa-facebook-f mr-1" /> Login
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#" className="btn btn-google btn-block">
                            <i className="fab fa-google mr-1" /> Login
                          </a>
                        </div>
                      </div>
                    </form>
                    {/* /Register Form */}
                  </div>
                </div>
              </div>
              {/* /Register Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <Footer/>
    </>

  )
}

export default Register