import React from "react";
import { ValidationMessage } from "../validation-message/validation-message";

import "./input.scss";

export interface IInputProps {
  label: string;
  value: string;
  type: string;
  isRequired?: boolean;
  validationMessage?: string;
  onBlur?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: JSX.Element,
}

export const Input = ({
  label,
  value,
  type,
  isRequired,
  validationMessage,
  onBlur,
  onChange,
  children,
}: IInputProps) => {
  return (
    <div className="input">
      <label className="input__label">
        {label}
        {isRequired && <span className="input__label-is-required-mark">*</span>}
      </label>
      <input
        className="input__field"
        type={type}
        value={value}
        onChange={onChange}
        onBlur={() => onBlur && onBlur()}
      ></input>
      {children}
      {validationMessage && <ValidationMessage message={validationMessage} />}
    </div>
  );
};
