import React from 'react'
import Menu from './Menu'
// import './restaurantMenu.css'
import './fullMenu.css'



export default class fullMenu extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className="special jumbotron col-12 jumbotron-fluid">
                        <div className="container">
                        {/* <img src={entree} className='imgFix' alt='chicken fried steak' /> */}
                        </div>
                    </div>
                    <Menu price={15} count={2} label={'Specials'} />
                    <div className="app jumbotron col-12 jumbotron-fluid">
                        <div className="container">
                        <img src='' alt='' />
                        </div>
                    </div>
                    <Menu price={8} count={8} label={'Appetizers'} />
                    <div className="salad jumbotron col-12 jumbotron-fluid">
                        <div className="container">
                        <img src='' alt='' />
                        </div>
                    </div>
                    <Menu price={8} count={8} label={'Salads'} />
                    <div className="entree jumbotron col-12 jumbotron-fluid">
                        <div className="container">
                        <img src='' alt='' />
                        </div>
                    </div>
                    <Menu price={12} count={8} label={'Entrees'} />
                    <div className="kid jumbotron col-12 jumbotron-fluid">
                        <div className="container">
                        <img src='' alt='' />
                        </div>
                    </div>
                    <Menu price={4} count={6} label={"KidZone"} />
                    <div className="dessert jumbotron col-12 jumbotron-fluid">
                        <div className="container">
                        <img src='' alt='' />
                        </div>
                    </div>
                    <Menu price={6} count={12} label={'Dessert'} />
                </div>
            </div>
        )
    }
}
