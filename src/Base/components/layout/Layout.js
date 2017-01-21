import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Header from './Header.js';
import { closeModal } from './../../actions/modalActionCreators';

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
    this.props.dispatch(closeModal(false));
  }

  render() {
    const { children, modalVisible, modalContentGenerator } = this.props;

    return (
      <div>
        <Modal show={modalVisible} onHide={this.closeModal}>
          <ModalBody>
            {modalContentGenerator()}
          </ModalBody>
          <ModalFooter>
            <Button bsStyle="link" onClick={this.closeModal}>Zavřít</Button>
          </ModalFooter>
        </Modal>
        <Header/>
        {children}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    modalVisible: store.modalReducer.showModal,
    modalContentGenerator: store.modalReducer.contentGenerator
  }
};

Layout = connect(
  mapStateToProps
)(Layout);

export default Layout;
