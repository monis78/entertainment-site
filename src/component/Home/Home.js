import React, { Component } from 'react'
import MainSlider from './main-slider/MainSlider'
import Slider from './slider/slider'
import Footer from '../footer/footer'
import './home.css'
import Featured from './featured/Featured'
import Youtube from './youtube trending/youtube'


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
                <Footer />
            </div>
        )
    }
}
