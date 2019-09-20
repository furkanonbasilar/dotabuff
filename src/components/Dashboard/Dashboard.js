import React from 'react'
import classes from './Dashboard.module.css'

const Dashboard = (props) => {  
    return (
        <div className={classes.border + ' '  + 'container'} >
            <img src={require('../../assets/News1.png')} alt="News" />
            <p>
                As is tradition at The International, two new heroes were announced. 
                The first hero was Snapfire, a Keen folk auntie that bakes cookies and rides a dragon lizard. 
                The second hero was Void Spirit, the fourth spirit following earth, storm, and ember. 
                Not much is known about these heroes at the moment but more information is likely to follow once TI9 is finished.
            </p>
            <img src={require('../../assets/News2.jpg')} alt="News" />
            <p>
            So many traditions have been broken in The International 2019. There was no Chinese team in the Grand Finals, for the first time since The International 2013. We have our two time Champion and we had a team making it all the way to the Grand Finals through the lower bracket.
            </p>
        </div>
    )
}

export default Dashboard
