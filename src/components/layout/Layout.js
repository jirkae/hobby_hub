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
      modalContentGenerator: () => {return null;},
        showNotification: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeNotification = this.closeNotification.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.showModal) {
      this.setState({showNotification: true})
    }
  }

  openModal(modalContentGenerator) {
    this.setState({modalContentGenerator: modalContentGenerator})
  }

  closeModal() {
    this.props.dispatch(changeModalVisibility(false));
      this.setState({showNotification: true});
  }

    closeNotification() {
        this.setState({showNotification: false});
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
        {children}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    modalVisible: store.modalReducer.showModal,
    user: store.userReducer.user
  }
};

Layout = connect(
  mapStateToProps
)(Layout);

export default Layout;
