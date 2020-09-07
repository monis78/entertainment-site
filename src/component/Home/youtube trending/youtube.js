import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import './youtube.css'


export default class Youtube extends Component {
    render() {
        return (
            <Row className="service p-0 align-item-center text-center  m-0 m-auto container-fluid" style={{maxWidth:"1350px"}}>
                    <div className="service px-2 m-auto ">
                    <iframe src="https://www.youtube.com/embed/u0R_i6vgCvQ" frameborder="0" title="Video 1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen width="300em" height="200em"></iframe>
                    </div>
                    <div className="service px-2 m-auto" >
                    <iframe src="https://www.youtube.com/embed/u0R_i6vgCvQ" frameborder="0" title="Video 1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen width="300em" height="200em"></iframe>
                    </div>
                    <div className="service px-2 m-auto" >
                    <iframe src="https://www.youtube.com/embed/u0R_i6vgCvQ" frameborder="0" title="Video 1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen width="300em" height="200em"></iframe>
                    </div>
            </Row>
        )
    }
}
