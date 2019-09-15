import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Toolbar extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor:'#242F39', fontWeight: 600  }}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/">MY DOTABUFF<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item" >
                                    <NavLink to="/" className="nav-link" onMouseOver={this.props.enter}>Heroes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/items" className="nav-link">Items</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">Players</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/matches" className="nav-link">Matches</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}