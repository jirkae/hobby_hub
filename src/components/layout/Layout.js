import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Header from './Header.js';
import { changeModalVisibility } from './../../actions/index';

import Tabs from "./../layout/Tabs";
import LoginForm from "./../login/LoginForm";
import RegisterForm from "./../login/RegisterForm";

import '../../scss/app.scss';
import '../../css/style.css';
import '../../css/fontello.css';
import '../../css/animate.min.css';

const tabs = [
    { label: 'Přihlášení', render: () => <LoginForm /> },
    { label: 'Registrace', render: () => <RegisterForm /> }
];

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
            <Tabs tabs={tabs}/>
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
    modalVisible: store.modalReducer.showModal
  }
};

Layout = connect(
  mapStateToProps
)(Layout);

export default Layout;
