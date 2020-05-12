import React from "react";

const Button = ({ styleType = 'outlined', addtlClass = "", children, ...props }) => {
  const getType = () => {
    if(styleType === 'outlined'){
      return 'text-dark btn-outline-dark';
    }else if( styleType === 'blocked'){
      return 'btnBlock';
    }
  }
  return <button {...props} className={`btn ${getType()} ${addtlClass}`}>{children}</button>;
};

export default Button;
