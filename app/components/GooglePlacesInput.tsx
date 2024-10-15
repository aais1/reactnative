import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = ({setLocation}:{setLocation:any}) => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search a location'
      onPress={(data, details = null) => {
        console.log(data, details);
        setLocation(data);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    />
  );
};

export default GooglePlacesInput;
