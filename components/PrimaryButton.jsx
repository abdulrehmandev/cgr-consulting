import React from 'react';
import btnStyles from '../styles/PrimaryButton.module.css';

const PrimaryButton = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${btnStyles.pri_btn} ${className && className}`}
    >{children}</button>
  );
};

export default PrimaryButton;
