import React from "react";
import classNames from "classnames";

import { ValidationMessage } from "../validation-message/validation-message";

import "./input.scss";

export interface IInputProps {
  label: string;
  value: string;
  type: string;
  isRequired?: boolean;
  validationMessage?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: JSX.Element;
  inputClassName?: string;
}

export const Input = ({
  label,
  value,
  type,
  isRequired,
  validationMessage,
  onChange,
  children,
  inputClassName,
}: IInputProps) => {
  return (
    <div className="input">
      <label className="input__label">
        {label}
        {isRequired && (
          <span className="input__label--is-required-mark">*</span>
        )}
      </label>
      <input
        className={classNames("input__field", inputClassName)}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
      {children}
      {validationMessage && <ValidationMessage message={validationMessage} />}
    </div>
  );
};
