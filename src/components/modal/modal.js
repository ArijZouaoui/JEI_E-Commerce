import React, { Component } from "react";
import LoginModal from "../../components/modal/LoginModal";

class ModalLog extends Component {
    handleSignup = (username, email, password) => {console.log("sent Data :",username,email,password)};
    handleLogin = (username, password) => {console.log("sent Data :",username,password)}

    render() {
        return (
            <LoginModal
                handleSignup={this.handleSignup}
                handleLogin={this.handleLogin}
            />
        );
    }
}
export default ModalLog;
