import React from "react";
import classNames from "classnames";

import "./button.scss";

interface IProps {
  text: string;
  type: "green" | "white";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({ text, type, disabled, onClick }: IProps) => {
  return (
    <button
      className={classNames("button", { [`button--${type}`]: true })}
      disabled={disabled}
      onClick={() => onClick && onClick()}
    >
      {text}
    </button>
  );
};
