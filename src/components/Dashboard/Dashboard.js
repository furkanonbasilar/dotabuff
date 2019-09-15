import React from 'react'
import classes from './Dashboard.module.css'

const Dashboard = (props) => {  
    return (
        <div className='container' >
            
                <img src={require('../../assets/News1.png')} alt="News" />
                <p className={classes.p}>As is tradition at The International, two new heroes were announced. 
                The first hero was Snapfire, a Keen folk auntie that bakes cookies and rides a dragon lizard. 
                The second hero was Void Spirit, the fourth spirit following earth, storm, and ember. 
                Not much is known about these heroes at the moment but more information is likely to follow once TI9 is finished.</p>
        </div>
    )
}

export default Dashboard
