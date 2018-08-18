import React, { Component } from 'react';
import { Toolbar, Avatar, NavLink, Drawer, Heading } from 'rebass';
import logo from './fosmedia-logo.jpg';
import fb from './facebook.svg';
import tw from './twitter.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
  }
  toggleNavDrawer = (currentState) => () => {
    this.setState({
      drawerOpen: !currentState,
    });
  }
  render() {
    return (
      <Toolbar minHeight={64} bg="white">
        <Avatar size={76} borderRadius={1} src={logo} />
        <NavLink target="_blank" href="https://www.facebook.com/fosmedia2020/" ml="auto"><img src={fb} /></NavLink>
      </Toolbar>      
    );
  }
}

export default Header;
