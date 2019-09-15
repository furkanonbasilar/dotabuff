import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap'
import classes from './Modal.module.css'

class ModalContent extends Component {
    render() {
      return (
      <Fragment>
        <Modal
          show={this.props.show}
          size="lg"
          onHide={() => this.props.setSmShow()}
        >
        <Modal.Header closeButton>
          <Modal.Title >
            <img
                      className="card-img-top"  
                      src={require('../../../assets/' + this.props.HeroDetails.name + '.png')}
                      alt={this.props.HeroDetails.name} />
            <h3 className="text-center">{this.props.HeroDetails.name}</h3>
          </Modal.Title>
        </Modal.Header>
        <ul>
        <li><Modal.Body className={classes.modalbody}>{this.props.HeroDetails.spellInfoQ}</Modal.Body> </li>
        <li><Modal.Body className={classes.modalbody}>{this.props.HeroDetails.spellInfoW}</Modal.Body> </li>
        <li><Modal.Body className={classes.modalbody}>{this.props.HeroDetails.spellInfoE}</Modal.Body> </li>
        <li> <Modal.Body className={classes.modalbody}>{this.props.HeroDetails.spellInfoR}</Modal.Body> </li>
        </ul>
        </Modal>
      </Fragment>
      )
    }
}

const mapStateToProps = (state) => {
    return{
        HeroDetails: state.heroDetails,
        show: state.show
    }
}
const mapDispatchToProps = (dispatch) => {
  return{
      setSmShow: () => dispatch({type:'SET_MODALFALSE'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);