import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import moment from "moment";

function Register() {
  const url = "http://localhost:8080/authentications/signup";
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("Male");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function signUpBtnOnClick() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: fullName,
        phoneNumber: phoneNumber,
        email: email,
        dateOfbirth: moment(new Date(dateOfBirth)).format('YYYY-MM-DD'),
        gender: (gender === "Male" ? "true" : "false"),
        loginName: username,
        password: password,
      }),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      });
  }

  return (
    <>
      <Header />

      {/* Page Content */}
      <div className="content" style={{ padding: "125px" }}>
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
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Full Name
                        </label>
                        <div class="col-sm-9">
                        <input
                          id="fullNameInput"
                          type="text"
                          className="form-control floating"
                          onChange={(e) => setFullName(e.target.value)}
                        />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Phone Number
                        </label>
                        <div class="col-sm-9">
                        <input
                          id="phoneNumberInput"
                          type="text"
                          className="form-control floating"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Email
                        </label>
                        <div class="col-sm-9">
                        <input
                          id="emailInput"
                          type="email"
                          className="form-control floating"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Birthdate
                        </label>
                        <div class="col-sm-9">
                          <input
                            id="dateOfBirthInput"
                            type="date"
                            className="form-control floating"
                            onChange={(e) => setDateOfBirth(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Gender
                        </label>
                        <div class="col-sm-9">
                          <select
                            id="genderInput"
                            className="form-control floating"
                            onChange={(e) => setGender(e.target.value)}
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Username
                        </label>
                        <div class="col-sm-9">
                          <input
                            id="usernameInput"
                            type="text"
                            className="form-control"
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
                            id="passwordInput"
                            type="password"
                            className="form-control floating"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="text-right">
                        <a className="forgot-link" href="/login">
                          Already have an account?
                        </a>
                      </div>
                      <button
                        className="btn btn-primary btn-block btn-lg login-btn"
                        type="submit"
                        onClick={() => signUpBtnOnClick()}
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

      <Footer />
    </>
  );
}

export default Register;
