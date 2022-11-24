//import mapgl lib
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";

function Map({ data }) {
  //state for selected location - initially null
  //after clicking on the p tag, will setlocation as the location
  const [selectedLocation, setSelectedLocation] = useState({});

  //transform the json data(searchResults's locations)
  //object into lat-long coordinate
  const coordinates = data.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  //get the latitude and longitude of the center point of
  //all the locations' coordinates
  const center = getCenter(coordinates);

  //state for viewport, with lat and longitude is the center
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/chautrancmt26/clau4b9xj000v14pgq0nxge6d"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {/* Map each listing coordinate to a marker on the map and its info */}
      {data.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              ariel-label="push-pin"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
            ></p>
          </Marker>

          {/* The popup that should show if we click on a marker*/}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
