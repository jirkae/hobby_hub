import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Header from './Header.js';
import Footer from './Footer.js';

import '../../scss/app.scss';

class LayoutRaw extends Component {
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
    this.setState({modalContentGenerator: () => {return(null);}});
  }

  render() {
    const { children } = this.props;
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

mapStateToProps = (state) => {
  return {
    modalVisible: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

const Layout = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutRaw);

export default Layout;