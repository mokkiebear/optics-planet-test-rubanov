import React from 'react';
import './validation-message.scss';

interface IProps {
  message: string;
}

export const ValidationMessage = ({ message }: IProps) => {
  return <div className="validation-message">{message}</div>;
};
