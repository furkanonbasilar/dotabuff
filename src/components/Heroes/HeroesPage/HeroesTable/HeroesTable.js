import React, { Component } from 'react';
import Data from '../../../../data/data.json'
import HeroCard from './HeroCard/HeroCard'
// import ItemsCarousel from 'react-items-carousel';
// import { Carousel } from 'react-responsive-carousel';
// import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


class HeroesTable extends Component {
    constructor(props) {
        super(props);

        this.results = [];
    }

    componentWillMount = () => {
        this.results = Data.heroes.filter(data => data.primary === this.props.mainAtt);
    }

    render() {
        return (
            <div className='container' style={{paddingTop: 20, paddingBottom: 20}}>
                <div className='row justify-content-center'>
                    <img width="30" 
                    height="30" 
                    src={require('../../../../assets/' + this.props.mainAtt + '.png')}
                    alt={this.props.mainAtt}/>
                    <h3 style={{color: 'white',paddingLeft: '15px'}}>{this.props.mainAtt}</h3>
                </div>
                <div className="row">
                    {
                        this.results.map(hero => {
                            return <HeroCard key={hero.id} data={hero}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default HeroesTable;