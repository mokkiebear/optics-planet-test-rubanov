import React from "react";
import classNames from 'classnames';

import "./button.scss";

interface IProps {
  text: string;
  type: "green" | "white";
  disabled?: boolean;
}

export const Button = ({ text, type, disabled }: IProps) => {
  return (
    <button className={classNames("button", { [`button--${type}`]: true })} disabled={disabled}>{text}</button>
  );
};
