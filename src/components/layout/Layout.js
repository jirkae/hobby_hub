import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Header from './Header.js';
import Footer from './Footer.js';
import { changeModalVisibility } from './../../actions/index';

import '../../scss/app.scss';

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
      <div className="container">
        <Modal show={modalVisible}>
          <ModalBody>
            {modalContentGenerator()}
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.closeModal}>Zavřít</Button>
          </ModalFooter>
        </Modal>
        <Header openModalFc={this.openModal}/>
        {children}
        <Footer/>
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