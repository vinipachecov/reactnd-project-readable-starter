import React from 'react'
import PropTypes from 'prop-types'
import classes from './Header.css';
import Link from 'react-router-dom/Link';

const Header = () => {
  return (
    <header className={classes.Header}>
      <Link to={'/'}>
        Readable Starter
      </Link>
    </header>
  )
}

Header.propTypes = {

}

export default Header

