import React from 'react';

import "./un-lieu.css"

import unlieu11 from "../../assets/accueil-1-1.jpg"
import unlieu21 from "../../assets/accueil-2-1.jpg"
import unlieu31 from "../../assets/un-lieu-3-1.jpg"
import unlieu40 from "../../assets/un-lieu-4-0.jpg"
import unlieu41 from "../../assets/un-lieu-4-1.jpg"

import SliderFullSize from '../component/SliderFullSize'
import SliderHalfSize from '../component/SliderHalfSize'
import TextAreaHalfSize from '../component/TextAreaHalfSize'
import HalfTextHalfImageArea from '../component/HalfTextHalfImageArea';
import Logos from '../component/Logos';
import Footer from '../component/Footer';

function UnLieu() {
    const pageOnePictures=[{image:unlieu11},],pageTwoPictures=[{image:unlieu21}],pageThreePictures=[{image:unlieu31}];
  return (
    <div className='un-lieu'>
        <div className='un-lieu-accueil-carousel'> 
            <SliderFullSize pictures={pageOnePictures}/>
            <div className="gradient-background"></div>
        </div>
        <div className='un-lieu-un-lieu-carousel'>
            <div className='text-area'>
                <TextAreaHalfSize titre={"UN LIEU"} text={"Univers singulier, identitaire et façonné par l’homme. Essences de bois brulé, pierre de Savoie et cristal taillé, la salle, apaisante et épurée, accueille l’authentique transparence réconfort"}/>
            </div>
            <div className='slider-area'>
                <SliderHalfSize pictures={pageTwoPictures}/>
            </div>
        </div>
        <div className='un-lieu-le-jardin-carousel'>
            <div className='slider-area'>
                <SliderHalfSize pictures={pageThreePictures}/>
            </div>
            <div className='text-area'>
                <TextAreaHalfSize titre={"LE JARDIN"} text={"Inspiration quotidienne, dans son jus, le végétal s’exprime au gré du temps, dans ses moindres mouvements, discret ou profus, libre d’être soi."}/>
            </div>
        </div>

        <div className='un-lieu-esprits-engages'>
            <HalfTextHalfImageArea image={unlieu40} backgroundColor={"#051528"} titre={"ESPRITS ENGAGÉS"} text={"Épouser une identité unique, pousser jusqu’à l’ultime sa passion sensible et émotionnelle, curieuse et libre d’être."}/>
            <div className='img-area'>
                <img loading="lazy" src={unlieu41} alt="Plat"/>
            </div>
        </div>
        {/* 
        <div className='un-lieu-esprits-engages'>
            <div className='img-area'>
                <img loading="lazy" src={unlieu41} alt="Plat"/>
            </div>
        </div>
            */}
        <div className='un-lieu-logo'>
            <Logos/>
        </div>
        <div className='un-lieu-footer'>
            <Footer/>
        </div>
    </div>
  )
}

export default UnLieu