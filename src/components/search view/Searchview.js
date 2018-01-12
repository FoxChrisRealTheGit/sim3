import React, { Component } from 'react';
import '../../css/reset.css';
import './searchview.css';
import { getUserInfo } from '../../ducks/users';

import Header from '../header/Header';

class SearchView extends Component {

    componentDidMount() {

    }

    render() {
        const BACKGROUND = {
            background:"#F2F2F2",
        }
        return (
            <div style={BACKGROUND}>
                <Header name="Search" />
            </div>
        )
    }
}

export default SearchView;