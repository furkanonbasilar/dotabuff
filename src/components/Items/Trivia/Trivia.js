import React, { Component } from 'react'
import classes from './Trivia.module.css'


 class Trivia extends Component {
    render() {
        return (
            <div className={classes.border}>
                {setTimeout(() => {
                    return <img src={require('../../../assets/Abaddon.png')}/>
                },2000)}
            </div>
        )
    }
}

export default Trivia;
