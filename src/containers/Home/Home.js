import React, { Component } from 'react';
import MainSlider from '../../component/Home/main-slider/MainSlider';
import Slider from '../../component/Home/slider/slider';
import './home.css';
import Featured from '../../component/Home/featured/Featured';
import Youtube from '../../component/Home/youtube trending/youtube';


export default class Home extends Component {
    render() {
        return (
            <div>
                <MainSlider />
                
                <Slider />
                <section> <hr className="hr-text" data-content="FEATURED LISTING" style={{maxWidth:"1350px"}}/></section>
                <Featured />

                <section> <hr className="hr-text" data-content="TRENDING ON YOUTUBE" style={{maxWidth:"1350px"}}/></section>
                <Youtube />
            </div>
        )
    }
}
