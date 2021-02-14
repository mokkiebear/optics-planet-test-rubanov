import React, { useState } from "react";
import { IInputProps, Input } from "./../input/input";

import "./password-input.scss";

interface IProps extends Partial<IInputProps> {
  value: string;
}

export const PasswordInput = ({ value, ...otherProps }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Input
      label="Password"
      type={isVisible ? "text" : "password"}
      value={value}
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
