import React, { Component } from 'react'
import { Row} from 'react-bootstrap'
import './featured.css'


export default class Featured extends Component {
    render() {
        return (
            <Row className=" m-0 px-2 row mx-auto featured"  style={{maxWidth:"1350px"}}>
          
           <div> <div sm="2" className="card-body  featured-image p-0 "></div> <div>name surname</div></div>
           <div> <div sm="2" className="card-body  featured-image p-0 "></div> <div>name surname</div></div>
           <div> <div sm="2" className="card-body  featured-image p-0 "></div> <div>name surname</div></div>
           <div> <div sm="2" className="card-body  featured-image p-0 "></div> <div>name surname</div></div>
           <div> <div sm="2" className="card-body  featured-image p-0 "></div> <div>name surname</div></div>
           <div> <div sm="2" className="card-body  featured-image p-0 "></div> <div>name surname</div></div>
            {/* <div sm="2" className="card-body featured-image mx-1 m-auto col-md-3 col-lg-3 col-sm-4 mb-0 p-0"></div> */}
           
           </Row>
        )
    }
}
