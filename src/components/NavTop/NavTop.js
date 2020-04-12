import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import {Link} from 'react-router-dom';

import './NavTop.scss';
import { DropDownMenu } from 'material-ui';

class NavTop extends React.Component{
  state= {
    isOpen: false
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen});

  hoverOn = () => this.setState({isOpen: true});

  hoverOff = () => this.setState({isOpen: false});

  render() {
    return(
      <div className="NavTop">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="./">Dependable Lawn Care</NavbarBrand>
          <NavbarToggler onClick={this.toggle} onMouseOver={this.hoverOn} onMouseLeave={this.hoverOff}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>

              <NavItem>
                <NavLink> <Link to="./"> Home </Link> </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link to="/contact">
                    Contact
                  </Link>
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  Residential
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem> <Link to="/mowing"> Mowing </Link> </DropdownItem>
                  <DropdownItem> <Link to="/fertilization"> Fertilization </Link> </DropdownItem>
                  <DropdownItem> <Link to="/other"> Other </Link> </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown>
                <DropdownToggle nav>
                    Commercial
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem> <Link to="/commercial"> Commercial </Link> </DropdownItem>
                  <DropdownItem> <Link to="/multifamily"> Multi-Family </Link> </DropdownItem>
                  <DropdownItem> <Link to="/government"> Government </Link> </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavTop;