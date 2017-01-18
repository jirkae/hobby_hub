/* global google */

import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

export default class EventsMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            center: { lat: 50.069483399999996, lng: 14.401650799999997 },
            zoom: 5
        }

        this.onGoogleMapLoad = this.onGoogleMapLoad.bind(this);
    }

    onGoogleMapLoad() {
        const {params} = this.props;
        if (typeof params.cities === 'object' && params.cities.length === 1 && typeof google !== 'undefined') {
            const geocoder = new google.maps.Geocoder();
            
            geocoder.geocode({ 'address': params.cities[0] }, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    this.setState({
                        center: results[0].geometry.location,
                        zoom: 11
                    });
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        } else {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    this.setState({
                        center: pos,
                        zoom: 11
                    });
                });
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.onGoogleMapLoad();
    }

    render() {
        return (
            <div>
                <GoogleMapLoader
                    containerElement={
                        <div style={{ height: '200px' }} />
                    }
                    googleMapElement={
                        <GoogleMap
                            ref={this.onGoogleMapLoad}
                            zoom={this.state.zoom}
                            center={this.state.center}
                            >
                            <Marker
                                position={{ lat: 50.069483399999996, lng: 14.401650799999997 }}
                                onClick={() => { alert('xx') } } />
                        </GoogleMap>
                    }
                    />
            </div>
        );
    }
}