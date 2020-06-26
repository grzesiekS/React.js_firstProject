import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Search from '../Search/Search';
import { settings, navLinks } from '../../data/dataStore';

class Header extends React.Component {
  render(){
    return(
      <header className={styles.components}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to={navLinks.home.href}>
              <i className={settings.headerIcon}></i>
            </Link>
            <nav>
              <NavLink exact to={navLinks.home.href} activeClassName='active'>{navLinks.home.name}</NavLink>
              <NavLink exact to={navLinks.info.href} activeClassName='active'>{navLinks.info.name}</NavLink>
              <NavLink exact to={navLinks.faq.href} activeClassName='active'>{navLinks.faq.name}</NavLink>
            </nav>
          </div>
          <Search />
        </Container>
      </header>      
    );
  }
}

export default Header;
