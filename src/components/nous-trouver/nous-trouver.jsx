import React, { useState } from 'react';

import "./nous-trouver.css"

import nousTrouver1 from "../../assets/nous-trouver-1.jpg"

import map from "../../assets/map.jpg"
import Logos from '../component/Logos';
import Footer from '../component/Footer';
import TextAreaHalfSize from '../component/TextAreaHalfSize';

function NousTrouver() {
    const services=[{jour:"Mardi",valeur:"soir"},{jour:"Mercredi",valeur:"midi & soir"},{jour:"Jeudi",valeur:"midi & soir"},{jour:"Vendredi",valeur:"midi & soir"},{jour:"Samedi",valeur:"midi & soir"},{jour:"Dimanche",valeur:"midi"},],numero="+33 04 50 23 07 90",[isCopied,setIsCopied]=useState(!1),openGoogleMaps=()=>{let e=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("31 Chem. du Nant Sec, 74570 Filli\xe8re")}`;window.open(e,"_blank")};
    const handleCopyClick = () => {
        navigator.clipboard.writeText(numero)
          .then(() => {
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 3000);
          })
      };
  return (
    <div>
        <div className='nous-trouver-accueil'>
            <img src={nousTrouver1} alt="Plat"/>
            <div className="gradient-background"></div>
        </div>
        <div className='nous-trouver-acces'>
            <div className='text-area'>
                <TextAreaHalfSize titre={"ACCÈS"} text={"13 rue Jean Mermoz"} scndText={"74940 Annecy-le-Vieux, FRANCE"}/>
            </div>
            <div className='img-area'>
            <img onClick={openGoogleMaps} loading='lazy' src={map} alt="map" />
            </div>
        </div>
        <div className='nous-trouver-contact'>
            {isCopied && (
                <div className="popup">
                Copié avec succès !
                </div>
            )}
            <div className='contacter'>
                <h1>NOUS CONTACTER</h1>
                <p onClick={handleCopyClick}>Tél. : +33 (0)4 50 23 07 90</p>
            </div>
            <div className='services'>
                <h1>SERVICES</h1>
                <table>
                    <tbody>
                        {services.map((service, index) => (
                        <tr key={index}>
                            <td>{service.jour}</td>
                            <td>{service.valeur}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <div className='nous-trouver-logo'>
            <Logos/>
        </div>
        <div className='nous-trouver-footer'>
            <Footer/>
        </div>
    </div>
  )
}

export default NousTrouver