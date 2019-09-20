import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import SecondToolbar from './SecondToolbar/SecondToolbar'

class Toolbar extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor:'#242F39', fontWeight: 600, paddingLeft: 0, paddingRight: 0,marginTop: 0}}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <button className="navbar-toggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/">MY DOTABUFF<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item" >
                                    <NavLink  exact to="/main" className="nav-link" onMouseOver={() => this.props.setHeroesNavbar()}>Heroes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/info" className="nav-link" onMouseOver={() => this.props.setItemsNavbar()}>Items</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="/players " className="nav-link">Players</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/matches" className="nav-link">Matches</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                {this.props.showNavbar ? <SecondToolbar /> : null}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
       showNavbar: state.showNavbar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setHeroesNavbar: () => dispatch({type:'SET_HEROES_NAVBAR'}),
        setItemsNavbar: () => dispatch({type:'SET_ITEMS_NAVBAR'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Toolbar);