import React from 'react'
import classes from './Footer.module.css'
import { NavLink } from 'react-router-dom'

const Footer = (props) => {
    return (
    <div>
      <footer className="footer text-center position-sticky ">
        <div className="container d-flex justify-content-start" style={{paddingTop:'5rem'}}>
          <ul className={classes.still} style={{listStyle:'none'}}>
            <NavLink >
              Copyright 2019 Furkan 
            </NavLink>
            <NavLink>
              About
            </NavLink>
            <NavLink >
              Support
            </NavLink>
            <a href='https://github.com/furkanonbasilar?tab=repositories'>
              <i class="fab fa-github-square"></i>
            </a>
            <a href='https://www.instagram.com/furkanonbasilar/'>
              <i class="fab fa-instagram"></i>
            </a>
          </ul>
        </div>
      </footer>

    </div>
    )
}

export default Footer
