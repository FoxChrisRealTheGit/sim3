import React, { Component } from 'react';
import '../../css/reset.css';
import './header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        }
    }
    render() {
        const HEADER = {
            display: "flex",
            justifyContent: "space-around",
            height: "75px",
            alignItems: "center",
            backgroundImage: "radial-gradient(circle at 50%-46%, #ff9770, #ff7a6e)",
            boxShadow: "0 10px 20px 0 rgba(0,0,0,0.1), 0 6px 6px 0 rgba(0,0,0,0.2)",
        }
        return (
            <header style={HEADER}>
                <Link to="/dashboard"><h5>Helo</h5></Link>
               <Link to="/search"><h5>search</h5></Link>
                <h6>{this.state.name}</h6>
                <div><a href="/api/auth/logout"><button>logout</button></a></div>
            </header>
        )
    }
}