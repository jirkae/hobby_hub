import React, { Component } from 'react';

import Tabs from "./../../Base/components/layout/Tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class LoginRegisterModal extends Component {
    render() {
        const { onSuccessLogin } = this.props;

        const tabs = [
            { label: 'Přihlášení', render: () => <LoginForm onSuccess={onSuccessLogin} /> },
            { label: 'Registrace', render: () => <RegisterForm /> }
        ];

        return (
            <Tabs tabs={tabs} />
        )
    }
}


export default LoginRegisterModal;