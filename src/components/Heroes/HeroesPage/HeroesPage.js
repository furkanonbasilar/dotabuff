import React, { Component } from 'react';
import HeroesTable from './HeroesTable/HeroesTable'
import { connect } from 'react-redux';
import ModalContent from '../../UI/Modal/Modal'

class HeroesPage extends Component {
   
    render() {
        return (
            <div className='container'>
                <ModalContent />
                <HeroesTable mainAtt={"Strength"} />
                <HeroesTable mainAtt={"Agility"} />
                <HeroesTable mainAtt={"Intelligence"} />
            </div>
        )
    }
}

const mapStatetoProps = ( state ) => {
    return {
        heroDetails: state.heroDetails,
        show: state.show
    }

}

export default connect(mapStatetoProps)(HeroesPage);