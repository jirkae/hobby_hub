import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Header from './Header.js';
import { changeModalVisibility } from './../../actions/index';

import '../../scss/app.scss';
import '../../css/style.css';
import '../../css/fontello.css';
import '../../css/animate.min.css';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalContentGenerator: () => {return null;}
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(modalContentGenerator) {
    this.setState({modalContentGenerator: modalContentGenerator})
  }

  closeModal() {
    this.props.dispatch(changeModalVisibility(false))
  }

  render() {
    const { children, modalVisible } = this.props;
    const { modalContentGenerator } = this.state;

    return (
      <div>
        <Modal show={modalVisible}>
          <ModalBody>
            {modalContentGenerator()}
          </ModalBody>
          <ModalFooter>
            <Button bsStyle="link" onClick={this.closeModal}>Zavřít</Button>
          </ModalFooter>
        </Modal>
        <Header openModalFc={this.openModal}/>
        <div className="main-container">
          {children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    modalVisible: store.modalReducer.showModal
  }
};

Layout = connect(
  mapStateToProps
)(Layout);

export default Layout;
