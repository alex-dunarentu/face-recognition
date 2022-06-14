import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./styles.scss";

const Register = ({ loadUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email: email.toLowerCase(),
        password,
      }),
    };

    /* console.log("name ", name);
    console.log("Email ", email);
    console.log("Password ", password); */
    setIsLoading(true);
    const data = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/register`, requestOptions);
    const response = await data.json();

    if (response.status === "success") {
      setIsLoading(false);
      loadUser(response.user);
      setRegistered(true);
    } else {
      setIsLoading(false);
      setErrorMsg(`Email ${email} already exists.`);
    }
  };

  return (
    <div className="Register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="FormGroup">
          <label htmlFor="name">Name</label>
          <input required type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
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
            <span>Register</span>
          </button>
        </div>
      </form>
      {registered ? <Navigate to="/" /> : ""}
      {errorMsg ? <div className="ErrorMsg">{errorMsg}</div> : ""}
      {isLoading ? (
        <div className="RegisterLoading">
          <span>Creating account</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Register;
