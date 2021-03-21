import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 90.4125181,
    lng: 23.810332
};

function Map() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCa8tjkfQ0YgGJI9HVcPcgH2ZQR3_fiYIU"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)