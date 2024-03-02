import React from 'react';
import "./un-moment.css"

import unMoment11 from "../../assets/un-moment-1-1.jpg"
import unMoment21 from "../../assets/un-moment-2-1.webp"
import unMoment31 from "../../assets/un-moment-3-1.jpg"
import unMoment40 from "../../assets/un-moment-4-0.jpg"
import unMoment41 from "../../assets/un-moment-4-1.jpg"

import menuPDF from '../../assets/menu.pdf';
import carteDesVinsPDF from '../../assets/carte-des-vins.pdf';

import TextAreaHalfSize from '../component/TextAreaHalfSize'
import HalfTextHalfImageArea from '../component/HalfTextHalfImageArea';
import Logos from '../component/Logos';
import Footer from '../component/Footer';

function UnMoment() {
  return (
    <div className='un-moment'>
        <div className='un-moment-accueil'>
            <img src={unMoment11} alt="Plat"/>
            <div className="gradient-background"></div>
        </div>
        <div className='un-moment-ame-vegetale'>
            <div className='text-area'>
                <TextAreaHalfSize titre={"ÂME VÉGÉTALE ET LACUSTRE"} buttonText={"Notre menu"} buttonPdf={menuPDF} text={"Reflet d’un garde-manger nourricier, la cuisine, brut et authentique dessine ses lignes dans ses courbes sauvages et charnelles sans contour"}/>
            </div>
            <div className='img-area'>
                <img loading="lazy" src={unMoment21} alt="Plat"/>
            </div>
        </div>
        <div className='un-moment-la-cueillette'>
            <div className='img-area'>
                <img loading="lazy" src={unMoment31} alt="champignon"/>
            </div>
            <div className='text-area'>
                <TextAreaHalfSize titre={"LA CUEILLETTE"} text={"Inspiration quotidienne, dans son jus, le végétal s’exprime au gré du temps, dans ses moindres mouvements, discret ou profus, libre d’être soi."}/>
            </div>
        </div>
        <div className='un-moment-terroir'>
            <HalfTextHalfImageArea image={unMoment40} backgroundColor={"#251715"} buttonText={"La carte des vins"} buttonPdf={carteDesVinsPDF} titre={"VERRE DU TERROIR"} text={"Explorer un territoire et rendre à la vigne la beauté des racines locales, les cépages d’ici, écho aux flacons d’ailleurs, la pertinence d’une équipe sommelière en totale cohérence"}/>
            <div className='img-area'>
                <img loading="lazy" src={unMoment41} alt="Vin"/>
            </div>
        </div>
        <div className='un-moment-logo'>
            <Logos/>
        </div>
        <div className='un-moment-footer'>
            <Footer/>
        </div>
    </div>
  )
}

export default UnMoment