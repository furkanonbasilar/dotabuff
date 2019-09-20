import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const SecondToolbar = (props) => {
    console.log(props.navbarContent);
    return (
        <div className="container-fluid" style={{ backgroundColor:'#2E3740', lineHeight: 0.3, fontSize: "0.9rem", marginBottom: "1rem" ,paddingLeft: 0}}> 
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">   
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="navbar-nav mr-auto">
                                {props.navbarContent.map(content => {
                                let classname = content;
                                return <li> <NavLink to={'/' + classname} className="nav-link">{content}</NavLink></li>})}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        navbarContent: state.navbarContent
    }
}

export default connect(mapStateToProps)(SecondToolbar);


                                
{/*                                 
                                <li className="nav-item">
                                    <NavLink to="/heroes" className="nav-link">Main</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/introduction" className="nav-link">Introduction</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="/statics" className="nav-link">Statistics</NavLink>
                                </li> */}