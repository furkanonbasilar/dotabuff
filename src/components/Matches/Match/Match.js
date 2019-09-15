import React from 'react'
import './Match.css'

const Match = (props) => {
    return (
        <div>
          {props.status ? <li className="list-group-item win">RADIANT WIN</li> : <li className="list-group-item lose">DIRE WIN</li>}
        </div>
    )
}

export default Match;
