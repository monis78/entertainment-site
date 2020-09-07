import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row , Col, NavDropdown,FormControl,Button,Form,Navbar, Nav} from 'react-bootstrap'
import './navbar.css'


class Navbare extends Component {
    render() {
      
        return (
            <React.Fragment>

            <header className="navbar-nav">

            <Row style={{margin: "0px", padding: " 0px",maxHeight:"80px"}}>
                <Col className=" py-1 my-auto my-auto d-flex justify-content-center text-center logo" style={{borderRadius:"0 40px 40px 0",border :"5px solid ",borderLeft:"0px" ,borderColor:"deeppink"
            ,maxWidth:"25vh", height: "100%", alignItems:"center"}}> 
             <h3>Logo</h3>
            </Col>
                
                <Col  style={{margin : "0px", padding: "0px",position:"relative",maxHeight:"80px"}}>
                  
                    <Row  className=" p-0 pr-3 m-0  navbar-nav justify-content-center text-right" style={{height:"35%"}}>
                        <Col className="navmail">
                        <a href="/#"> email@email.com </a> |<a href="/#"> 9876543210 </a> 
                        </Col>                   
                    </Row>

                    <Row className=" justify-content-end text-center userbar p-0" style={{backgroundColor:"deeppink",margin:"0", marginLeft:"-3px" ,alignItems:"center",height:"30%"}}>
                        <Nav className=" text-center p-0 m-0 position-relative">
                            <Nav.Item className=" text-center p-0 bg-danger px-3 m-0 mx-2"><a className="p-0 d-inline text-white " href="/Login"> login </a></Nav.Item> 
                            <Nav.Item className=" text-center p-0 bg-danger px-3 m-0 mx-2"><a className="p-0 d-inline text-white " href="/signup"> signup</a></Nav.Item>
                        </Nav>
                    </Row>
                    
                    <Row className="d-flex justify-content-end m-0 p-0" style={{height:"35%"}}>
                        <Col className=" text-center d-flex px-3 search position-relative" style={{borderRadius:"0px 0px 0px 150px",backgroundColor:"grey",}}>
                        select catalogue select sub catalodue search item
                        </Col>
                    </Row>
                 </Col>
                </Row>
               
            {/* div for routing */}
            <Row className="d-flex justify-content-center p-o m-0" >  
                                 
                        <Navbar className="m-0 px-3 mt-2 p-0 bg-warning navslash"  style={{borderRadius:"100px 100px 0 0px"}}>                       
                           
                            
                                <Nav className="mr-auto m-0 p-0" >
                                    <Nav.Link className="m-0 p-0 mx-2 d-flex" href="#home">Why us</Nav.Link>|
                                    <Nav.Link className="m-0 p-0 mx-2 d-flex" href="#link">Employee</Nav.Link>
                                    <Nav.Link className="m-0 p-0 mx-2 d-flex" href="#link">Coordinator</Nav.Link>|
                                    <Nav.Link className="m-0 p-0 mx-2 d-flex" href="#link">Member</Nav.Link>|
                                    
                                    <NavDropdown size="sm" className="m-0 p-0 mx-2 d-flex" title="Director" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>|

                                    <NavDropdown size="sm" className="m-0 p-0 mx-2 d-flex" title="Products" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>|
                                    <NavDropdown size="sm" className="m-0 p-0 mx-2 d-flex" title="Blog" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>|
                                    <NavDropdown size="sm" className="m-0 p-0 mx-2 d-flex" title="Events" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    
                                </Nav>
                            
                            
                            </Navbar> 

                    </Row>


                </header>


            </React.Fragment>
        )
    }
}
export default Navbare