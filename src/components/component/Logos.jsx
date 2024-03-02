import React from 'react'

import './Logos.css'

import ecotable from "../../assets/ecotable.svg"
import gault from "../../assets/gault-millau.svg"
import michelin from "../../assets/michelin-2023.svg"
import relais from "../../assets/relais-chateaux.svg"

const Logos = () => {
  return (
    <div className='logos-container'>
      <div className='svgs'>
        <img loading="lazy" src={relais} alt="ecotable" />
        <img loading="lazy" src={michelin} alt="gault-millau" />
        <img loading="lazy" src={gault} alt="michelin" />
        <img loading="lazy" src={ecotable} alt="relais-chateaux"/>
      </div>
    </div>
  );
}
export default Logos