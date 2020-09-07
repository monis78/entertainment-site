import React, { Component } from 'react'
import {Row} from 'react-bootstrap'
import './footer.css'
import { 
    FaFacebookF,
    FaTwitter, 
    FaInstagram, 
    FaYoutube, 
} from 'react-icons/fa';

export default class Footer extends Component {
    render() {
        return (

            <footer className="p-0 m-0" >


                <Row className="container-fluid footer p-0 m-0 text-center col-md-12">
                    <div className="text-md-left col-md-3"  xs lg="2">
                    follow us on
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item "> <FaFacebookF /></li>
                            <li className="list-inline-item"> <FaTwitter /></li>
                            <li className="list-inline-item"> <FaInstagram /></li>
                            <li className="list-inline-item"> <FaYoutube /></li>
                        </ul>
                    </div>
                    <div className="text-center d-md-inline-block p-3 col-md-6 text-white">
                    <h3>Logo</h3>
                    </div>
                </Row>


                <Row className=" text-center d-flex justify-content-center bg-secondary container-fluid p-0 m-0">© 2020 Copyright &nbsp;
                  uditsolutions.in
                </Row>


            </footer>
        )
    }
}
