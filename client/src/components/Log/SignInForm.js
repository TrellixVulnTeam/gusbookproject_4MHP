import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  console.log(process.env.REACT_APP_API_URL);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: { email, password },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/";
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        id="email"
        name="email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <div className="email error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        id="password"
        name="password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      <div className="password error"></div>
      <br />

      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default SignInForm;
