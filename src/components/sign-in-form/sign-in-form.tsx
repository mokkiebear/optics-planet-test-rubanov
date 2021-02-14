import React, { useState } from "react";
import { useHistory } from "react-router";

import { signIn } from "../../services/authService";
import { validateEmail } from "../../utils/validators";
import { Button } from "../common/button/button";
import { EmailInput } from "../common/email-input/email-input";
import { PasswordInput } from "../common/password-input/password-input";

import "./sign-in-form.scss";

const SignInForm = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");

  const [keepMeSignedIn, setKeepMeSignedIn] = useState(false);

  const onSignIn = () => {
    // email validation
    const result = validateEmail(email);
    setEmailError(result);

    if (!result) {
      signIn(email, password).then((data) => console.log(data));
    }
  };

  return (
    <form className="sign-in-form form">
      <div className="form__title">Sign In</div>
      <EmailInput
        value={email}
        validationMessage={emailError}
        onChange={(e) => setEmail(e.target.value)}
        setValidationMessage={setEmailError}
      />
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="sign-in-form__additional-actions">
        <div>
          <input
            type="checkbox"
            checked={keepMeSignedIn}
            onChange={(e) => setKeepMeSignedIn(e.target.checked)}
            id="keep-me-signed"
          />
          <label htmlFor="keep-me-signed">Keep me signed in</label>
        </div>

        <div className="link" onClick={() => history.push("/forgot-password")}>
          Forgot your password?
        </div>
      </div>

      <Button
        text="Sign In"
        type="green"
        disabled={!email || !password || !!emailError}
        onClick={() => onSignIn()}
      />
      <Button
        text="Register Now"
        type="white"
        onClick={() => history.push("/register")}
      />
    </form>
  );
};

export default SignInForm;
