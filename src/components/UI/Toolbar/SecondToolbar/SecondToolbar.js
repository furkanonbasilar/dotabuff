import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const SecondToolbar = (props) => {
    return (
        <div className="container-fluid" style={{ backgroundColor:'#2E3740', lineHeight: 0.3, fontSize: "0.9rem", marginBottom: "1rem"}}> 
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">   
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink to="/heroes" className="nav-link">Main</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/introduction" className="nav-link">Introduction</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">Statistics</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SecondToolbar);