import React from 'react'
import './restaurantMenu.css'
// import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

export default class FindUs extends React.Component {
    render() {
        return (
            <div className="pt-5 mb-5 d-flex flex-column col-12 align-items-center">
                <div className='text-center'>
                    <h1 className='display-4'>Come on down and see us some time!</h1>
                    <p className='pt-3'>Find us at 348 East Main Street, Lexington Ky!<br />Open from 11am-1am Monday through Saturday.</p>
                </div>
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe title='map' className='embed-responsive-item map d-flex pt-3 justify-content-center' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.2114130383156!2d-84.49472698453341!3d38.04215997971157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1585695408136!5m2!1sen!2sus" frameBorder="0" allowFullScreen={true} aria-hidden="false" tabIndex="0"></iframe>
                </div>
            </div>

)
}
}
// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyBmO-ZrHjsB1y4trCvSufAYdt7O7gEJkC4'
// })(FindUs);


{/* <Map
    google={this.props.google}
    zoom={8}
    initialCenter={{ lat: 47.444, lng: -122.176 }}
/> */}