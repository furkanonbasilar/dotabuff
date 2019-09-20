import React, { Component } from 'react';
import { OverlayTrigger, Popover} from 'react-bootstrap';
import { connect } from 'react-redux'


class ListItems extends Component {

    _renderItem = () => {
      const popoverHover = (
        <Popover>
          <Popover.Title ><h3 style={{textTransform: 'uppercase'}}>{this.props.name}</h3></Popover.Title>
          <Popover.Content style={{color:'white',backgroundColor:'#413C3A'}}>
            {this.props.information ? <p>{this.props.information}</p> : null}
            {this.props.passive ? <p><strong>Passive: </strong>{this.props.passive}</p> : null}
            {this.props.properties.length !== 0 ? <p><span style={{fontSize: '18px', color:'#33CEFF'}}>Attributes: </span>{this.props.properties}</p> : null}
            <img width='20px' height='10px' src='https://steamcdn-a.akamaihd.net/apps/dota2/images/tooltips/gold.png'/>
            &nbsp;<p className="d-inline "style={{color:'yellow'}}>{this.props.gold}</p>
  
          
          </Popover.Content>
        </Popover>
      );
      
      let arrItem = [];

      this.props.items.map(item => {
        const url = `https://steamcdn-a.akamaihd.net/apps/dota2/images/items/${item.image}.png`;

        arrItem.push(
          <OverlayTrigger  delay={{ show: 0, hide: 0}} key={item.id} placement="right-start" overlay={popoverHover}  >
            <img width='70px' height='53px' src={url} alt={item.name} style={{cursor: 'pointer'}} 
            onMouseMove={() => this.props.setPopover(item.information,item.name,item.passive,item.properties,item.gold)}/>
          </OverlayTrigger>
        )
      })

      return arrItem;
    }

    render() {

      return (
          <div className='col-md-1 pt-5'>
              {this._renderItem()}
          </div>
      )
    }
}
const mapStateToProps = (state) => {
  return {
    information: state.itemDetails.information,
    name: state.itemDetails.name,
    passive: state.itemDetails.passive,
    properties: state.itemDetails.properties,
    gold: state.itemDetails.gold
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
  setPopover: (information,name,passive,properties,gold) => dispatch({type:'SET_POPOVER',information: information,name: name,passive: passive,properties: properties,gold: gold})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListItems);
