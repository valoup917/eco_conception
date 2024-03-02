import React from 'react';
import './Button.css';

const Button = ({ text, pdfLink }) => {
  const openPdf=()=>{window.open(pdfLink,"_blank")};
  return (
    <button className="button" onClick={openPdf}>
      {text}
    </button>
  );
};

export default Button;