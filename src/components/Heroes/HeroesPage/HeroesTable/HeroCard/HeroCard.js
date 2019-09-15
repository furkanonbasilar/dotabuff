import React, { Component } from 'react';
import { connect } from 'react-redux';


class HeroCard extends Component {

    onClickHandler = () => {
        this.props.setHeroDetails(this.props.data);
        this.props.setModalStatus();
        console.log(this.props.heroDetails);
    } 

    render() {
        
        let imageStyle = {
            cursor: 'pointer'
        }

        return (
            <div className="card" style={{width: '10rem', marginLeft: 10}}>
                <img
                    style={imageStyle}
                    className="card-img-top"  
                    onClick={this.onClickHandler}
                    src={require('../../../../../assets/' + this.props.data.name + '.png')}
                    alt={this.props.data.name} />
                <p className="position-absolute d-inline-flex justify-content-center font-weight-bold text-light fixed-bottom">
                    {this.props.data.name}
                </p>
            </div>
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return{
        setHeroDetails: (details) => dispatch({ type:'SET_HERODETAILS', details: details }),
        setModalStatus: () => dispatch({type: 'SET_MODALTRUE'})
    }
}

const mapStatetoProps = (state) => {
    return{
        heroDetails: state.heroDetails
    }

}

export default connect(mapStatetoProps, mapDispatchtoProps)(HeroCard);