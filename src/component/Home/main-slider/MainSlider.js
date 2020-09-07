import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../../asserts/img/img1.jpg'


export default class MainSlider extends Component {
    render() {
        return (
            <div>

                <div class='container-fluid' >



                    <Carousel className=" mx-auto" style={{ maxWidth: "1350px", }} >

                        <Carousel.Item style={{ 'height': "300px" }} >

                            <img style={{ 'height': "300px" }}

                                className="d-block w-100"
                                alt=""
                                src={img1} />

                            <Carousel.Caption>

                            <div style={{float:"left" }}> <h3>First Demo </h3></div>

                            </Carousel.Caption>

                        </Carousel.Item>

                        <Carousel.Item style={{ 'height': "300px" }}>

                            <img style={{ 'height': "300px" }}

                                className="d-block w-100"
                                alt=""
                                src={img1} />

                            <Carousel.Caption>

                                <h3>Second Demo</h3>

                            </Carousel.Caption>

                        </Carousel.Item>

                        <Carousel.Item style={{ 'height': "300px" }}>

                            <img style={{ 'height': "300px" }}
                                alt=""
                                className="d-block w-100"

                                src={img1} />
                            <Carousel.Caption>

                                <h3>Third Demo</h3>

                            </Carousel.Caption>

                        </Carousel.Item>

                    </Carousel>

                </div>

            </div>
        )
    }
}
