import React from "react";
import { connect } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";

class NavExample extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    })
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    })
  }

  render() {
    return (
      <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand href="#">Shards React</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            {/* ADD PATHS AND REDIRECTS FOR THESE LINKS */}
            <NavItem>
              <NavLink active href="#">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active href="#">
                Trails
              </NavLink>
            </NavItem>

            <Dropdown open={this.state.dropdownOpen} toggle={this.toggleDropdown}>
              <DropdownToggle nav caret>
                Profile
              </DropdownToggle>
                <DropdownMenu>
                {/* ADD PATHS AND REDIRECTS FOR THESE LINKS */}
                  <DropdownItem>My Profile</DropdownItem>
                  <DropdownItem>Follower Feed</DropdownItem>
                  <DropdownItem>Edit</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            { this.props.loggedIn &&
            <NavItem>
              <NavLink active onClick={()=> this.props.dispatch({ type: 'LOG_OUT' }) }>
                Log Out
              </NavLink>
            </NavItem> 
            }
          </Nav>

          <Nav navbar className="ml-auto">
            <InputGroup size="sm" seamless>
              <InputGroupAddon type="prepend">
                <InputGroupText>
                  {/* <FontAwesomeIcon icon={faSearch} /> */}
                </InputGroupText>
              </InputGroupAddon>
              <FormInput className="border-0" placeholder="Search..." />
            </InputGroup>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

let mapStateToProps = state => ({ loggedIn: state.userReducer.loggedIn })
export default connect(mapStateToProps)(NavExample)