import React, { useEffect } from 'react';
import { useGeolocated } from 'react-geolocated';

const GetLocation = ({ onCoords }) => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 10000,
    });

  useEffect(() => {
    if (coords) {
      onCoords(coords);
    }
  }, [coords, onCoords]);

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : !coords ? (
    <div>Getting the location data&hellip; </div>
  ) : null;
};

export default GetLocation;
