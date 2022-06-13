import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./styles.scss";

const SignIn = ({ loadUser }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    /* console.log("Email ", email);
    console.log("Password ", password);
    */
    setIsLoading(true);
    const data = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/signin`, requestOptions);
    const response = await data.json();

    if (response.status === "success") {
      loadUser(response.user);
      setIsLoading(false);
      setSignedIn(true);
    } else {
      setIsLoading(false);
      setErrorMsg(response.description);
    }
  };

  return (
    <div className="SignIn">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="FormGroup">
          <label htmlFor="email">Email address</label>
          <input required type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <small className="GroupTextMuted">We'll never share your email with anyone else.</small>
        </div>
        <div className="FormGroup">
          <label htmlFor="password">Password</label>
          <input required type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="FormActions">
          <button type="submit">
            <span>Sign In</span>
          </button>
          <button>
            <Link to="/register">Register</Link>
          </button>
        </div>
      </form>
      {errorMsg ? <div className="ErrorMsg">{errorMsg}</div> : ""}
      {signedIn ? <Navigate to="/" /> : ""}
      {isLoading ? (
        <div className="SigninLoading">
          <span>Signing in</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SignIn;
