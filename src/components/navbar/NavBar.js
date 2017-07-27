import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Navbar, Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {signOutUser} from '../../actions/authentication.js'

class NavigationBar extends Component{
  renderLinks(){
    const {authenticated} = this.props.auth
    if (authenticated) {
      return (
        <Nav>
          <LinkContainer to={"/active"}>
            <NavItem >Active Book Title</NavItem>
          </LinkContainer>
          <LinkContainer to={"/form"}>
            <NavItem >Redux Form</NavItem>
          </LinkContainer>
          <LinkContainer to={"/redux-api"}>
            <NavItem >Redux Api</NavItem>
          </LinkContainer>
        </Nav>
      )
    }
  }
  signOut(){
    this.props.signOutUser()
  }
  renderAuthLink(){
    const {authenticated} = this.props.auth
    if (authenticated){
      return (
        <NavItem onClick={this.signOut.bind(this)}>Sign Out</NavItem>
      )
    }
    else {
      return (
        <LinkContainer to={"/login-test"}>
          <NavItem >Sign In</NavItem>
        </LinkContainer>
      )
    }
  }
  render(){
    const {authenticated} = this.props.auth

    return(
      <Navbar >
      <div>
        <Navbar.Header>
          <LinkContainer to={"/"}>
            <Navbar.Brand >
              Fullstack Boilerplate
            </Navbar.Brand>
          </LinkContainer>
        </Navbar.Header>
        {this.renderLinks()}
        <Nav pullRight>
          {this.renderAuthLink()}
        </Nav>
      </div>
      </Navbar>
    )
  }

}
function mapStateToProps(state){
  return {
    auth: state.auth,

  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({signOutUser},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(NavigationBar)
