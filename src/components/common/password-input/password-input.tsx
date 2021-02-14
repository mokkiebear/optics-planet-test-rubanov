import React, { useState } from "react";
import { IInputProps, Input } from "./../input/input";

import "./password-input.scss";

interface IProps extends Partial<IInputProps> {
  value: string;
}

export const PasswordInput = ({ value, label, ...otherProps }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Input
      label={label ? label : "Password"}
      type={isVisible ? "text" : "password"}
      value={value}
      inputClassName='password-input__padding'
      {...otherProps}
    >
      {!!value ? (
        <div
          className="password-input__toggle-button"
          onClick={() => setIsVisible((v) => !v)}
        >
          {isVisible ? "Hide" : "Show"}
        </div>
      ) : (
        <></>
      )}
    </Input>
  );
};
