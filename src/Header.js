import React, { Component } from 'react';
import { Toolbar, Avatar, NavLink, Drawer, Heading } from 'rebass';
import logo from './assets/fosmedia-logo.jpg';
import fb from './assets/facebook.svg';
import insta from './assets/instagram.svg';
import mail from './assets/mail.svg';
import { copyEmail } from './utils';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
  }
  render() {
    return (
      <Toolbar style={{ position: 'fixed', top: 0, right: 0, width: '100%' }} minHeight={64} bg="white">
        <Avatar size={76} borderRadius={1} src={logo} />
        <NavLink color="black" onClick={copyEmail} ml="auto"><img src={mail} /></NavLink>
        <NavLink target="_blank" href="https://www.facebook.com/fosmedia2020/"><img src={fb} /></NavLink>
        <NavLink target="_blank" href="https://www.instagram.com/fos_media2020/"><img src={insta} /></NavLink>
      </Toolbar>      
    );
  }
}

export default Header;
