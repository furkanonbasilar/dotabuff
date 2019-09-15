
import React, { Component } from 'react'
import Data from '../../../data/data.json'
import IntroductionList from './IntroductionList/IntroductionList'


export default class Introduction extends Component {
    componentWillMount = () => {
        this.strength = Data.heroes.filter(data => data.primary === 'Strength');
        this.agility = Data.heroes.filter(data => data.primary === 'Agility');
        this.intelligence = Data.heroes.filter(data => data.primary === 'Intelligence');
    }

    render() {
        return (
            <div className='container'>
                <IntroductionList attribute={this.strength} primaryInfo={Data.primaryInfo.Strength} name='Strength'/>
                <IntroductionList attribute={this.agility} primaryInfo={Data.primaryInfo.Agility} name='Agility'/>
                <IntroductionList attribute={this.intelligence} primaryInfo={Data.primaryInfo.Intelligence} name='Intelligence'/>
            </div>
        )
    }
}

