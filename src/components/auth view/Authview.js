import React, { Component } from 'react';
import '../../css/reset.css';
import './authview.css';

class AuthView extends Component {

    render() {
        const BACKGROUND={
            height: '100vh',
            width: '100%',
            backgroundImage:"linear-gradient(99deg, #ff70a6, #ff9770 40%, #ffd670 73%, #e9ff70)",
            display: 'flex',
            alignItems:"center",
            justifyContent:"center"
        }
        return (
            <div style={BACKGROUND}>
                <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
            </div>
        )
    }
}

export default AuthView;