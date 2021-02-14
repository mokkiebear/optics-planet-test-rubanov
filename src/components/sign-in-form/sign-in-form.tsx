import React, { useState } from "react";
import { Button } from "../common/button/button";
import { EmailInput } from "../common/email-input/email-input";
import { Input } from "../common/input/input";
import { PasswordInput } from "../common/password-input/password-input";

import "./sign-in-form.scss";

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");

  const [keepMeSignedIn, setKeepMeSignedIn] = useState(false);

  return (
    <div className="sign-in-form">
      <div className="sign-in-form__title">Sign In</div>
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
          />
          <label>Keep me signed in</label>
        </div>
        <a>Forgot your password?</a>
      </div>
      <Button
        text="Sign In"
        type="green"
        disabled={!!email && !!password && !!emailError}
      />
      <Button text="Register Now" type="white" />
    </div>
  );
};
