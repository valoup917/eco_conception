import React from 'react'
import Button from './Button'
import './HalfTextHalfImageArea.css';

const HalfTextHalfImageArea = ({ titre, text, image, buttonText, buttonPdf }) => {
  return (
    <div className='half-text'>
      <div className='half-text2'>
        <h1>{titre}</h1>
        <p>{text}</p>
      </div>
      <div className='button-container'>
        {
          buttonText ? 
          <Button text={buttonText} pdfLink={(buttonPdf)}/>
          : null
        }
      </div>
      <div className='half-image'>
        <img loading="lazy" src={image} alt=""/>
      </div>
    </div>
  )
}

export default HalfTextHalfImageArea