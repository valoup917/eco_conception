import React from 'react'
import Button from './Button'

import './TextAreaHalfSize.css'

const TextAreaHalfSize = ({ titre, text, scndText, buttonText, buttonPdf }) => {
  return (
    <div className='text-area-half-size'>
      <h1>{titre}</h1>
      <p>{text}</p>
      {
        scndText ?
        <p className='second-text'>{scndText}</p>
        : null
      }
     {
       buttonText ? 
       <Button text={buttonText} pdfLink={(buttonPdf)}/>
       : null
      }
    </div>
  )
}

export default TextAreaHalfSize