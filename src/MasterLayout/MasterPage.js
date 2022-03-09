import React, { useEffect, useState } from "react";
// import { MDBNav, ListGroup, ListGroupItem, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBIcon, MDBBtn } from "mdbreact";
import { Navbar, Container, Offcanvas, Nav, NavDropdown, FormControl, Form, Button, Dropdown, Glyphicon } from 'react-bootstrap'

//import { CDBSidebar } from "cdbreact";
import { NavLink, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../MasterLayout/CustomisedStyle.css'
import LoginUser from '../Images/LoginUser.png'
import AscenTech_Logo from '../Images/AscenTech_Logo.png'
import '../css/font-awesome.min.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultError from "../DefaultError.js";
import HomePage from "../Components/HomePage.js";
import ComplaintRegistration from '../Components/ComplaintRegistration.js'
import TestPage from "../Components/TestPage";


const ReactNavSideMenu = () => {

    const [isActive, setActive] = useState("false");

    useEffect(() => {
        setActive(false);
    }, []);

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <BrowserRouter>
            <div>
                <div className="Body-Page">
                    <div className="Master-Header">
                        <div style={{ width: '220px' }}><NavLink to="/"> <img src={AscenTech_Logo} /></NavLink> </div>
                        <div><button className="btn btn-primary" onClick={handleToggle}>|||</button></div>
<div>
<!-- Start of WebFreeCounter Code -->
<a href="https://www.webfreecounter.com/" target="_blank"><img src="https://www.webfreecounter.com/hit.php?id=gepcacn&nd=6&style=71" border="0" alt="visitor counter"></a>
<!-- End of WebFreeCounter Code -->
</div>
                        <div style={{ textAlign: 'center', flex: '1', color: 'white', fontSize: '30px', fontWeight: 'bold' }}>ASCENTech Information Technology Pvt Ltd</div>
                        <div style={{}}>
                            <Dropdown>
                                <Dropdown.Toggle variant="white" id="dropdown-basic" style={{ padding: '3px 7px 3px 7px', color: 'white' }}>
                                    <img src={LoginUser} width="35" height="35" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item style={{ textAlign: 'center' }}>
                                        <div onClick={(e) => { e.preventDefault() }}>Admin User</div>
                                    </Dropdown.Item>
                                    <Dropdown.Divider></Dropdown.Divider>
                                    <Dropdown.Item style={{ textAlign: 'center' }}>
                                        <button className="btn btn-danger btn-sm" onClick={() => { alert('Server Loading') }}>Logout</button>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </div>
                    <div className="Master-Body">
                        <div className={isActive ? "Nav-Side-Menu-Width" : "Nav-Side-Menu"}>


                            <div className="parent-menu">
                                <div className="parent-menu-heading">Admin</div>
                                <ul className="parent-menu-sub" style={{ listStyleType: 'none' }} >
                                    <li><NavLink className="parent-menu-sub-Link" to="/about">Password Change</NavLink></li>
                                    <li><NavLink className="parent-menu-sub-Link" to="/about">Password Reset</NavLink></li>
                                    <li><NavLink className="parent-menu-sub-Link" to="/about">Menu Access</NavLink></li>
                                    <li><NavLink className="parent-menu-sub-Link" to="/about">Mob.Version Update</NavLink></li>
                                </ul>
                            </div>

                            <div className="parent-menu">
                                <div className="parent-menu-heading">Master</div>
                                <ul className="parent-menu-sub" style={{ listStyleType: 'none' }} >
                                    <li><NavLink className="parent-menu-sub-Link" to="/about">User Master</NavLink></li>
                                    <li><NavLink className="parent-menu-sub-Link" to="/about">Department Master</NavLink></li>
                                    <li><NavLink className="parent-menu-sub-Link" to="/about">Comp.Type Master</NavLink></li>
                                    <li><NavLink className="parent-menu-sub-Link" to="/about">Comp.Sub Type Master</NavLink></li>
                                </ul>
                            </div>

                            <div className="parent-menu">
                                <div className="parent-menu-heading">Complaint</div>
                                <ul className="parent-menu-sub" style={{ listStyleType: 'none' }} >
                                    <li><NavLink className="parent-menu-sub-Link" to="/Components/ComplaintRegistration">Comp.Registration</NavLink></li>
                                    <li><NavLink className="parent-menu-sub-Link" to="/about">Comp.Authorisation</NavLink></li>
                                    <li><NavLink className="parent-menu-sub-Link" to="/about">Comp.Assign</NavLink></li>
                                    <li><NavLink className="parent-menu-sub-Link" to="/about">Comp.Status Update</NavLink></li>
                                    <li><NavLink className="parent-menu-sub-Link" to="/about">My Task List</NavLink></li>
                                </ul>
                            </div>

                            <div className="parent-menu">
                                <div className="parent-menu-heading">Reports</div>
                                <ul className="parent-menu-sub" style={{ listStyleType: 'none' }} >
                                    <li><NavLink className="parent-menu-sub-Link" to="/about">Comp.Close Details</NavLink></li>
                                </ul>
                            </div>

                            <div className={"Master-Footer"}><NavLink to=""
                                onClick={() => {
                                    window.open('https://ascentechindia.com/', "_blank").focus();
                                }}
                                style={{ textDecoration: 'none' }}>Powered By: ASCENTech</NavLink></div>

                        </div>


                        <div className={isActive ? "Content-Page-Width" : "Content-Page"}>


                            <div className="container-fluid">
                                <Routes>
                                    {/*<Route path="/" element={<ReactNavSideMenu/>}/>*/}
                                    <Route path="/Components/ComplaintRegistration" element={<ComplaintRegistration data={{entityId:'7', subEntityId:'1'}} />} />
                                    <Route path="*" element={<DefaultError />} />
                                    <Route path="/" element={<HomePage />} />
                                </Routes>


                                {/* from here pages will create easily, rest of code need to devide into top menu and side menu */}

                                {/* <div className="row">
                                <div className="col-lg-12">
                                    <h1 className="page-header">Dashboard</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="card border-dark">
                                        <div className="card-heading bg-info p-2">
                                            <div className="row">
                                                <div className="col-3">
                                                    <i className="fa fa-comments fa-5x"></i>
                                                </div>
                                                <div className="col-9 text-end">
                                                    <div className="huge">26</div>
                                                    <div>New Comments!</div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#">
                                            <div className="card-footer">
                                                <span className="pull-left">View Details</span>
                                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                                <div className="clearfix"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card border-dark">
                                        <div className="card-heading bg-success p-2">
                                            <div className="row">
                                                <div className="col-3">
                                                    <i className="fa fa-tasks fa-5x"></i>
                                                </div>
                                                <div className="col-9 text-end">
                                                    <div className="huge">12</div>
                                                    <div>New Tasks!</div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#">
                                            <div className="card-footer">
                                                <span className="pull-left">View Details</span>
                                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

                                                <div className="clearfix"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card border-dark">
                                        <div className="card-heading bg-warning p-2">
                                            <div className="row">
                                                <div className="col-3">
                                                    <i className="fa fa-shopping-cart fa-5x"></i>
                                                </div>
                                                <div className="col-9 text-end">
                                                    <div className="huge">124</div>
                                                    <div>New Orders!</div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#">
                                            <div className="card-footer">
                                                <span className="pull-left">View Details</span>
                                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

                                                <div className="clearfix"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card border-dark">
                                        <div className="card-heading bg-danger p-2">
                                            <div className="row">
                                                <div className="col-3">
                                                    <i className="fa fa-support fa-5x"></i>
                                                </div>
                                                <div className="col-9 text-end">
                                                    <div className="">13</div>
                                                    <div>Support Tickets!</div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#">
                                            <div className="card-footer">
                                                <span className="pull-left">View Details</span>
                                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

                                                <div className="clearfix"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div> */}

                            </div>
                        </div>
                    </div>
                </div>


                {/* 
            <Navbar bg="light" expand={false}>
                <div>
                    <Navbar.Brand href="#" >CRM Dashoboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                        className="back-dark">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body> */}

                {/* <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" 
                                data-bs-toggle="dropdown">
                                    Dropdown button
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div> */}
                {/* <Nav className="justify-content-end flex-grow-1 pe-3">
                               
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>

                                <Nav.Link title="Compalaint" id="offcanvasNavbarDropdown22">
                                    <div aria-labelledby="offcanvasNavbarDropdown22">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                    </div>
                                </Nav.Link>

                                <NavDropdown title="Compalaint" id="offcanvasNavbarDropdown2">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item> */}
                {/* <NavDropdown.Divider /> */}
                {/* <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                </NavDropdown>


                            </Nav> */}
                {/* <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form> */}
                {/* </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </div>
            </Navbar> */}
                {/* <MDBContainer>
                <MDBBtn onClick={this.sidenavToggle("Left")}>
                    <MDBIcon size="lg" icon="bars" />
                </MDBBtn>
                <MDBSideNav slim fixed mask="rgba-blue-strong" triggerOpening={this.state.sideNavLeft} breakWidth={1300}
                    className="sn-bg-1">
                    <li>
                        <div className="logo-wrapper sn-ad-avatar-wrapper">
                            <a href="#!">
                                <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).webp" className="rounded-circle" />
                                <span>Anna Deynah</span>
                            </a>
                        </div>
                    </li>

                    <MDBSideNavNav>
                        <MDBSideNavLink to="/other-page" topLevel>
                            <MDBIcon icon="pencil-alt" className="mr-2" />Submit listing</MDBSideNavLink>
                        <MDBSideNavCat name="Submit blog" id="submit-blog" icon="chevron-right">
                            <MDBSideNavLink>Submit listing</MDBSideNavLink>
                            <MDBSideNavLink>Registration form</MDBSideNavLink>
                        </MDBSideNavCat>
                        <MDBSideNavCat name="Instruction" id="instruction" icon="hand-pointer" href="#">
                            <MDBSideNavLink>For bloggers</MDBSideNavLink>
                            <MDBSideNavLink>For authors</MDBSideNavLink>
                        </MDBSideNavCat>
                        <MDBSideNavCat name="About" id="about" icon="eye">
                            <MDBSideNavLink>Instruction</MDBSideNavLink>
                            <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
                        </MDBSideNavCat>
                        <MDBSideNavCat name="Contact me" id="contact-me" icon="envelope">
                            <MDBSideNavLink>FAQ</MDBSideNavLink>
                            <MDBSideNavLink>Write a message</MDBSideNavLink>
                        </MDBSideNavCat>
                    </MDBSideNavNav>
                </MDBSideNav>
            </MDBContainer> */}
            </div>
        </BrowserRouter>
    );
};

export default ReactNavSideMenu;