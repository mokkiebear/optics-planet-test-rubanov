import React from "react";
import { IInputProps, Input } from "./../input/input";

import "./email-input.scss";

interface IProps extends Partial<IInputProps> {
  value: string;
  setValidationMessage: (message: string) => void;
}

export const EmailInput = ({
  value,
  setValidationMessage,
  onChange,
  ...otherProps
}: IProps) => {
  const validate = () => {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regExp.test(String(value).toLowerCase())) {
      setValidationMessage("");
    } else {
      setValidationMessage(
        "That doesn't look to be a valid email address. Please review and try again."
      );
    }
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidationMessage("");
    onChange && onChange(e);
  };
  return (
    <Input
      label="Email"
      type="text"
      value={value}
      onBlur={() => validate()}
      onChange={onEmailChange}
      {...otherProps}
    />
  );
};
