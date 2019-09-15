import React, { Component } from 'react'
import Data from '../../data/data.json'
import Match from './Match/Match'

export default class Matches extends Component {
    render() {
        return (
            <div className="container">
                <ul>
                    {Data.gameInfo.map(match => {
                        return <Match 
                        status={match.result.radiant_win}
                        />
                    })}
                </ul>
            </div>
        )
    }
}
