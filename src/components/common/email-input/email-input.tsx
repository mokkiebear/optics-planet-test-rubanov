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

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidationMessage("");
    onChange && onChange(e);
  };

  return (
    <Input
      label="Email"
      type="text"
      value={value}
      onChange={onEmailChange}
      {...otherProps}
    />
  );
};
