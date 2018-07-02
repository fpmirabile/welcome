import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class _StartPage extends Component {
    static propTypes = {
    };

    state = {
        username: ''
    };

    handleLogin = () => {
        this.props.onLogin({
            username: this.state.username,
            loggedIn: true
        });
    }

    handleChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <input type="text" value={this.state.username} />
                <button onClick={this.handleLogin}>Log In</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const StartPage = connect(mapStateToProps, mapDispatchToProps)(_StartPage);
export default StartPage;