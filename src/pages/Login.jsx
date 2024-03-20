import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Navigate, useNavigate} from "react-router-dom";

function Login({ isLoggedIn }) {
  const url = "http://localhost:8080/authentications/signIn";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const SignInBtnOnClick = async () => {
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        loginName: username,
        password: password,
      }),
    };
    try {
      let response = await fetch(url, requestOptions);
      let data = await response.json();
      if (response.status === 200) {
        localStorage.setItem("isLoggedIn", true);
        // navigate("/");
      } else {
        console.log("Login failed");
      }
      console.log(data);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <>
      {isLoggedIn && <Navigate to="/" replace={true} />}
      <Header isLoggedIn={isLoggedIn} />
      {/* Page Content */}
      <div className="content" style={{ padding: "125px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Login Tab Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src="../img/login-banner.png"
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>Doccure</span>
                      </h3>
                    </div>
                    {/* <form> */}
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        Username
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          className="form-control floating"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        Password
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="password"
                          className="form-control floating"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      <a className="forgot-link" href="forgot-password.html">
                        Forgot Password ?
                      </a>
                    </div>
                    <button
                      className="btn btn-primary btn-block btn-lg login-btn"
                      type="submit"
                      onClick={() => SignInBtnOnClick()}
                    >
                      Login
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
                    <div className="text-center dont-have">
                      Don’t have an account? <a href="/register">Register</a>
                    </div>
                    {/* </form> */}
                  </div>
                </div>
              </div>
              {/* /Login Tab Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <Footer />
    </>
  );
}

export default Login;
