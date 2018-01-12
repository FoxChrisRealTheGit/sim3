import React, { Component } from 'react';
import '../../css/reset.css';
import './profileview.css';
import {getUserInfo} from '../../ducks/users';

import Header from '../header/Header';

class ProfileView extends Component {

    componentDidMount(){

    }

    render() {
        const BACKGROUND = {
            background:"#F2F2F2",
        }
        return (
            <div style={BACKGROUND}>
                <Header  name="Profile" />
            </div>
        )
    }
}

export default ProfileView;