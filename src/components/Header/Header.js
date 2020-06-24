import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';

class Header extends React.Component {
  render(){
    return(
      <header className={styles.components}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <i className='fas fa-bug'></i>
            </Link>
            <nav>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to='/info'>Info</NavLink>
            </nav>
          </div>
        </Container>
      </header>      
    );
  }
}

export default Header;
