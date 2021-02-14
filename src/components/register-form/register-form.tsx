import React, { useState } from "react";
import { useHistory } from "react-router";

import { register } from "../../services/authService";
import { validateEmail } from "../../utils/validators";
import { Button } from "../common/button/button";
import { EmailInput } from "../common/email-input/email-input";
import { PasswordInput } from "../common/password-input/password-input";

import "./register-form.scss";

const RegisterForm = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const onRegister = () => {
    // email validation
    const emailResult = validateEmail(email);
    setEmailError(emailResult);

    const passwordResult = password === confirmPassword;
    setConfirmPasswordError(
      passwordResult
        ? ""
        : "Your password do not match. Please review and try again."
    );

    if (!emailResult && passwordResult) {
      register(email, password, confirmPassword).then((data) =>
        console.log(data)
      );
    }
  };

  return (
    <div className="register-form form">
      <div className="form__title">Register Your Account</div>
      <EmailInput
        value={email}
        validationMessage={emailError}
        onChange={(e) => setEmail(e.target.value)}
        setValidationMessage={setEmailError}
        isRequired
      />
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        isRequired
      />
      <PasswordInput
        label="Re-type Password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPasswordError("");
          setConfirmPassword(e.target.value);
        }}
        isRequired
        validationMessage={confirmPasswordError}
      />
      <Button
        text="Register Your Account"
        type="green"
        onClick={() => onRegister()}
        disabled={
          !email ||
          !password ||
          !confirmPassword ||
          !!emailError ||
          !!confirmPasswordError
        }
      />
      <Button
        text="Sign In"
        type="white"
        onClick={() => history.push("/signin")}
      />
    </div>
  );
};

export default RegisterForm;
