import React, { useState } from "react";
import { useHistory } from "react-router";

import { Button } from "../common/button/button";
import { EmailInput } from "../common/email-input/email-input";
import { repairPassword } from "../../services/authService";

import "./forgot-password-form.scss";

const ForgotPasswordForm = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const redirect = (path: string) => {
    history.push(path);
  };

  const repair = () => {
    repairPassword(email).then((data) => console.log(data));
  };

  return (
    <form className="forgot-password-form form">
      <div className="form__title">Forgot Your Password?</div>
      <div className="forgot-password-form__text">
        Please enter your email address below and allow for a few minutes to
        receive the password
      </div>
      <EmailInput
        value={email}
        validationMessage={emailError}
        onChange={(e) => setEmail(e.target.value)}
        setValidationMessage={setEmailError}
      />
      <Button
        text="Send"
        type="green"
        disabled={!email || !!emailError}
        onClick={() => repair()}
      />
      <div className="forgot-password-form__additional-actions">
        <span className="link" onClick={() => redirect("/signin")}>
          Sign In
        </span>{" "}
        or{" "}
        <span className="link" onClick={() => redirect("/register")}>
          Register
        </span>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
