import React from 'react'
import classes from './Footer.module.css'
import { NavLink } from 'react-router-dom'

const Footer = (props) => {
    return (
    <div>
      <footer className="footer text-center position-relative">
        <div className="container d-flex justify-content-start" style={{paddingTop:'5rem'}}>
          <ul className={classes.still}>
            <NavLink >
              Copyright 2019 Furkan 
            </NavLink>
            <NavLink>
              About
            </NavLink>
            <NavLink >
              Support
            </NavLink>
            <a href='https://github.com/furkanonbasilar?tab=repositories' target='_blank'>
              <i class="fab fa-github-square"></i>
            </a>
            <a href='https://www.instagram.com/furkanonbasilar/' target='_blank'>
              <i class="fab fa-instagram"></i>
            </a>
          </ul>
        </div>
      </footer>

    </div>
    )
}

export default Footer
