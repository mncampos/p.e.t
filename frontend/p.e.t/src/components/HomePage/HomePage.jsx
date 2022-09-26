import React from 'react';
import Carousel from 'react-material-ui-carousel';
import bg1 from '../../assets/background-frame1.jpg';
import bg2 from '../../assets/background-frame2.jpg';

import heartIcon from '../../assets/heartPawIcon.png'
import secureIcon from '../../assets/secureDogIcon.png'
import shopIcon from '../../assets/shopIcon.png'
import bg3 from '../../assets/background-frame3.png';


import './HomePage.css'

export default function HomePage(){
    var imgs = [
        {
            image: bg1
        },
        {
            image: bg2
        },
        {
            image: bg3
        }
    ]

    return (
        <div className="homePageContainer">
            <div className="carousel">
        <Carousel>
            {imgs.map( ( img, i) => <img className="carouselImg" key={i} src={img.image} alt="test"/>)}
        </Carousel>
        </div>
        <div className="storeInformation">
            <div className="infoDiv">
                <div className="infoIcon">
                    <img src={secureIcon} alt="dogIcon"/>
                </div>
                <div className="petText blue">
                    <h4 className="infoTitle">We take care of your best friend</h4>
                    <p className="infoDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnum corpsum sit amet dolor.</p>
                </div>
            </div>
            <div className="infoDiv">
                <div className="infoIcon">
                    <img src={shopIcon} alt="dogIcon"/>
                </div>
                <div className="petText blue">
                    <h4 className="infoTitle">We got the best prices</h4>
                    <p className="infoDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnum corpsum sit amet dolor.</p>
                </div>
            </div>
            <div className="infoDiv">
                <div className="infoIcon">
                    <img src={heartIcon} alt="dogIcon"/>
                </div>
                <div className="petText blue">
                    <h4 className="infoTitle">Your pet well-being above everything</h4>
                    <p className="infoDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnum corpsum sit amet dolor.</p>
                </div>
            </div>
            <div className="infoDiv">
                <div className="infoIcon">
                    <img src={secureIcon} alt="dogIcon"/>
                </div>
                <div className="petText blue">
                    <h4 className="infoTitle">Maximum security</h4>
                    <p className="infoDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnum corpsum sit amet dolor.</p>
                </div>
            </div>
        </div>
        </div>

    );
}