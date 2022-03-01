import React,{Component} from "react";
import { Navbar, NavbarBrand, Jumbotron,Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'


class Header extends Component{

    constructor(props){
        super(props)
        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this)
    }

    // you need to bind this method to work in jsx
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }


    render(){
        return(
            <React.Fragment>
                {/* expand = 'md' the navbar will be shown as full size from the medium to large screens */}
                <Navbar dark expand = "md">
                    <div className='container'>
                        {/* navbar toggler is hidden on medium and big screen sizes and it is shown in small ones */}
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height = "30" width = "41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        {/* collapse is for the small and extra small screen sizes */}
                        {/* isOpen boolean is false then the items will be hidden and true then the items will be shown */}
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className = "nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className = "nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className = "nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className = "nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header