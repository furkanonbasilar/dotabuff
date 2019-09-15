import React, { Component } from 'react';
import Data from '../../data/data.json';
import ListItems from './ItemList/ListItem'


export default class Items extends Component {
    constructor(props){
        super(props);

        this.properties = ['consumable', 'attributes','armanents','arcane'];
    }

    _renderLists = () => {
        let arrList = [];

        this.properties.map(properties => {
            return arrList.push(
              <ListItems key={properties} items={Data.items.filter(item => item.job === properties)} />
            );
        });

        return arrList;
    }

    render() {
        return (
            <div className='container'>
                <div style={{height: 'auto', backgroundColor: 'black',marginTop:'1rem'}}>
                    <h2 className="text-center" style={{color:'#933F24' , letterSpacing:'7px',paddingTop:'0.5rem',paddingBottom:'0.5rem'}}>ITEMS</h2>
                </div>
              <div className='row'>
                  {this._renderLists()}
              </div>
            </div>
        )
    }
}
