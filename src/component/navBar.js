import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './restaurantMenu.css'


export default class navBar extends React.Component {
    render() {
        return (
            <li className='nav-item'>
                <a
                className='nav-link h4 d-flex justify-content-center flex-row nav'
                href='#'
                onClick={()=> this.props.changeCurrentPageHandle(this.props.navlink)}
                >
                {this.props.navlink}
                </a>
            </li>
        )
    }
}
