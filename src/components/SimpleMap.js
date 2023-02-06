import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="SuperAwesomePin text-primary"><i class="fa fa-map-marker text-danger" style={{fontSize:"30px"}} aria-hidden="true"></i>{text}</div>;

const center = {}

export default function SimpleMap(){
    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
    };   
  const defaultProps = {
    center: {
      lat: 19.0911488,
      lng: 73.023043
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAEByVWAKZ4-SgtoDejJ8KTHqKNxDyVdPM"}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        
      >
        {/* <Marker lat={defaultProps.center} lng={defaultProps.center} /> */}
        <AnyReactComponent
          lat={19.162403}
          lng={72.8433589}
          // text="234, 2nd floor, City center mall, Goregaon West, Mumbai- 400104, Maharashtra India"
        />
        <AnyReactComponent
          lat={19.1334302}
          lng={72.909148}
          // text="328, 3rd floor, Transit Building, IIT Bombay, Powai, Mumbai-400076, Maharashtra India"
        />
        <AnyReactComponent
          lat={19.159199}
          lng={73.0235712}
          // text="Khan Compund, Mumbra Kausa, Shilphata, Thane, Maharashtra 421204, India"
        />
      </GoogleMapReact>
    </div>
  );
}