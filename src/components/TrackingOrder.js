import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class TrackingOrder extends Component{
  static defaultProps = {
    center: {
      lat: -6.17,
      lng: 106.86
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCJB0Psn1cVe75sL1aNp3Dxvftw9cUqirk" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-6.175110}
            lng={106.865036}
            text="Your address" 
          />
        </GoogleMapReact>
      </div>
    );
  }
  
  }


export default TrackingOrder;
