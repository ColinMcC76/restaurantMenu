import React from 'react'
// import axios from 'axios'
import NavBar from './navBar'
// import Menu from './Menu'
import FullMenu from './fullMenu'
import AboutUs from './aboutUs'
import FindUs from './findUs'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './restaurantMenu.css'

export default class restaurantMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navlinks: ['menu', 'about us', 'find us'],
            currentPage: 'menu',
            mainMenu: []
        }
        this.updatePage = this.updatePage.bind(this)
    }
    componentDidMount() {
        if (localStorage.getItem('app') !== null) {

        }
    }
    updatePage(newPage) {
        this.setState({
            currentPage: newPage
        })
    }
    // }
    render() {
        // `${this.state.sideMenu.menu_items !== null ? 'console.log(this.state.sideMenu.menu_items)' :'' }`
        // console.log(this.state.sideMenu.menu_items)
        return (
            <div className='container-fluid'>
                <div className='row'>
                    {/* this is the main part of the page */}
                    <div className='col-12 container justify-content-around paddingFix'>
                        <nav
                            className='
                                navbar
                                navbar-expand-lg
                                navbar-dark
                                bg-dark
                                paddingFix
                                '
                        >
                            <div className='container col-12'>
                                <a className='navbar-brand' href='#'>
                                    <img className='
                                        nav
                                        container-fluid
                                        logo
                                        '
                                        src= {logo}
                                        alt='Connors Country Kitchen Logo'
                                    />
                                </a>
                                <button className="mr-5 navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="mr-5 collapse navbar-collapse" id="navbarResponsive">
                                    <ul className='d-flex flex-row justify-content-around navbar-nav ml-auto'>
                                        {this.state.navlinks.map((link, index) =>
                                            <NavBar key={index} changeCurrentPageHandle={this.updatePage} navlink={link} />
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/*  */}
                    {this.state.currentPage === 'menu' ? <FullMenu /> : null}
                    {this.state.currentPage === 'about us' ? <AboutUs /> : null}
                    {this.state.currentPage === 'find us' ? <FindUs /> : null}
                </div>
            </div>
        )
    }
}

// export default 
