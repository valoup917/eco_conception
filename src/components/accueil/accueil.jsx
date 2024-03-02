import React from 'react';

import "./accueil.css"

import map from "../../assets/map.jpg"
import accueil11 from "../../assets/accueil-1-1.jpg"
import accueil14 from "../../assets/accueil-1-4.jpg"
import accueil22 from "../../assets/accueil-2-2.jpg"
import accueil31 from "../../assets/accueil-3-1.jpg"

import SliderFullSize from '../component/SliderFullSize'
import SliderHalfSize from '../component/SliderHalfSize'
import TextAreaHalfSize from '../component/TextAreaHalfSize'
import Logos from '../component/Logos';
import Footer from '../component/Footer';

function Accueil() {
    const pageOnePictures=[{image:accueil11},{image:accueil14}],pageTwoPictures=[{image:accueil22}],pageThreePictures=[{image:accueil31}],openGoogleMaps=()=>{let e=encodeURIComponent("31 Chem. du Nant Sec, 74570 Filli\xe8re"),a=`https://www.google.com/maps/search/?api=1&query=${e}`;window.open(a,"_blank")};
  return (
    <div>
        <div className='accueil-accueil-carousel'> 
            <SliderFullSize pictures={pageOnePictures}/>
            <div className="text-area">
            <span>RESTAURANT <br />GASTRONOMIQUE<br />VÉGÉTAL & LACUSTRE<br />3* MICHELIN ANNECY</span>
            </div>
        </div>
        <div className='accueil-un-lieu-carousel'>
            <div className='text-area'>
                <TextAreaHalfSize titre={"UN LIEU"} text={"Univers singulier, identitaire et façonné par l’homme. Essences de bois brulé, pierre de Savoie et cristal taillé, la salle, apaisante et épurée, accueille l’authentique transparence réconfort"}/>
            </div>
            <div className='slider-area'>
                <SliderHalfSize pictures={pageTwoPictures}/>
            </div>
        </div>
        <div className='accueil-un-moment-carousel'>
            <div className='slider-area'>
                <SliderHalfSize pictures={pageThreePictures}/>
            </div>
            <div className='text-area'>
                <TextAreaHalfSize titre={"UN MOMENT"} text={"Par le prisme culinaire, entre pudeur et force vitale, le monde du vivant s’exprime jusqu’à la quintessence. Sublimé, il livre son émotion ultime"}/>
            </div>
        </div>
        <div className='accueil-nous-trouver-carousel'>
            <div className='text-area'>
                <TextAreaHalfSize titre={"NOUS TROUVER"} text={"Un lieu unique dans un écrin de nature."}/>
            </div>
            <div className='img-area'>
                <img onClick={openGoogleMaps} loading='lazy' src={map} alt="map" />
            </div>
        </div>
        <div className='accueil-logo'>
            <Logos/>
        </div>
        <div className='accueil-footer'>
            <Footer/>
        </div>
    </div>
  )
}

export default Accueil