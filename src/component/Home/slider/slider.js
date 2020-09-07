import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img2 from '../../../asserts/img/img2.jpg';
import img1 from '../../../asserts/img/img1.jpg'
import './slider.css'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};


export default class Slider extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="container-fluid mx-auto p-3" style={{maxWidth:"1350px"}}> <div ><img src={img1} alt="" style={{height:"100px", width:"100%",borderRadius:"20px"}}></img></div></div>
            <div className="container-fluid mx-auto"  style={{ maxWidth:"1350px",}}>
                <Carousel className="m-0 mt-3 p-0 " responsive={responsive}
                itemClass="carousel-item-padding-40-px"
                infinite={true}
                renderButtonGroupOutside={true}
                transitionDuration={500}
                
                >
                    <div className="m-0 p-0"><img src={img2} alt="" style={{ width: '75%', height: '75%'  }}/></div>
                    <div className="m-0 p-0"><img src={img2} alt="" style={{ width: '75%', height: '75%'  }}/></div>
                    <div className="m-0 p-0"><img src={img2} alt="" style={{ width: '75%', height: '75%'  }}/></div>
                    <div className="m-0 p-0"><img src={img2} alt="" style={{ width: '75%', height: '75%'  }}/></div>
                    <div className="m-0 p-0"><img src={img2} alt="" style={{ width: '75%', height: '75%'  }}/></div>
                    <div className="m-0 p-0"><img src={img2} alt="" style={{ width: '75%', height: '75%'  }}/></div>
                </Carousel>
                </div>
            </React.Fragment>

        )
    }
}
