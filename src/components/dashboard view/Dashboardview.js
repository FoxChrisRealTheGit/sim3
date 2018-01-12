import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../css/reset.css';
import './dashboardview.css';
import {getUserInfo} from '../../ducks/users';
import {Link} from 'react-router-dom';

import Header from '../header/Header';

class DashboardView extends Component {

    componentDidMount(){

    }

    render(props) {
        const BACKGROUND = {
            background:"#F2F2F2",
        }
        return (
            <div style={BACKGROUND}>
                <Header name="Dashboard" />
               <Link to="/profile">profile</Link>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUserInfo})(DashboardView)