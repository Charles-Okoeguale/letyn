import axios from "axios";
import { Alert } from "react-native";
import { getFromSecureStore } from "./helpers";
import * as SecureStore from 'expo-secure-store';

const API_KEY = 'WEhHbFlrdDBXMFJKTUFkb0JNc0tDS3hjbGpkUFNKbDJwd2NUVHB5VA==';
const Google = 'AIzaSyDQAOnEb-e_3ETc3K6RMftVQHcgjQ77_hI'

async function searchNearbyAddresses(query) {
  // Extract the street name from the query (e.g., "Romford Street")
  const streetName = extractStreetName(query);

  // Perform a broader search on the street name
  const nearbyResponse = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(streetName)}&key=YOUR_GOOGLE_API_KEY`
  );

  if (nearbyResponse.data.results && nearbyResponse.data.results.length > 0) {
      // Return the top nearby address
      const nearbyAddress = nearbyResponse.data.results.map(result => result.formatted_address);
      return nearbyAddress;
  } else {
      console.log("No nearby addresses found");
      return null;
  }
}

// Example function to extract the street name from the query
function extractStreetName(query) {
  const parts = query.split(",");
  return parts[0].trim().split(" ").slice(1).join(" "); // Extracts "Romford Street" from "26 Romford Street"
}

function extractPostalCode(formattedAddress) {
  const postalCodePattern = /\b\d{6}\b/;
  const match = formattedAddress.match(postalCodePattern);
  return match ? match[0] : null;
}

export const fetchEstates = async (estateRegister, setEstates) => {
    const { estateName, city, state, country, headOfficeAddress } = estateRegister;
    const query = `${estateName}, ${city}, ${state}, ${country}, ${headOfficeAddress}`;
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(query)}&key=${Google}`
      );
      if (response.data.status === 'OK' && response.data.results.length > 0) {
        const uniqueEstates = new Map(); 
        response.data.results.forEach(result => {
          const estateKey = result.place_id; 
          if (!uniqueEstates.has(estateKey)) {
            uniqueEstates.set(estateKey, {
              address: result.formatted_address,
              place_id: result.place_id,
              geometry: result.geometry,
              types: result.types,
              profile_pic: 'pics'
            });
          }
        });
        const estates = Array.from(uniqueEstates.values());
        if (estates.length > 0) {
          setEstates(estates); 
        } else {
          console.log('Address not found');
        }
      } else {
        console.log('No address found for the provided details');
      }
    } catch (error) {
      console.error('Error fetching estates:', error);
      console.log('Error fetching estates. Please try again.');
    }
};

export const checkEstateExists = async (estateName, postal_code) => {
    try {
      const response = await fetch('http://localhost:3000/estates/check-existence', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estateName, postal_code }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.message === 'Estate already exists'; 
    } catch (error) {
      console.error('Error checking estate existence:', error);
      return false; 
    }
};

export const fetchCountries = async (setCountries) => {
  try {
    const response = await axios.get('https://api.countrystatecity.in/v1/countries', {
      headers: {
        'X-CSCAPI-KEY': API_KEY,
      },
    });
    const formattedCountries = response.data.map(country => ({
      label: country.name,
      value: country.iso2,
    }));
    setCountries(formattedCountries)
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

export const fetchStates = async (iso2, setStates) => {
  try {
    const response = await axios.get(`https://api.countrystatecity.in/v1/countries/${iso2}/states`, {
      headers: {
        'X-CSCAPI-KEY': API_KEY,
      },
    });
    const formattedStates = response.data.map(state => ({
      label: state.name,
      value: state.iso2,
    }));
    setStates(formattedStates);
  } catch (error) {
    console.error('Error fetching states:', error);
    throw error; 
  }
};

export const fetchCities = async (iso2, stateIso2, setCities) => {
  try {
    const response = await axios.get(`https://api.countrystatecity.in/v1/countries/${iso2}/states/${stateIso2}/cities`, {
      headers: {
        'X-CSCAPI-KEY': API_KEY,
      },
    });
    const formattedCities = response.data.map(city => ({
      label: city.name,
      value: city.name,
    }));
    setCities(formattedCities);
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};

export const postRequest = async ({ 
  data, 
  endpoint, 
  onSuccess, 
  onFailure, 
  setIsLoading,
  type
}) => {
  if (!type ) {
    Alert.alert('Error', 'all fields are required');
    return;
  }
  try {
    setIsLoading(true);
    const response = await axios.post(endpoint, data);
    if (onSuccess) onSuccess(response);
    setIsLoading(false);
  } catch (error) {
    console.error('Error issuing OTP:', error);
    if (onFailure) onFailure(error);
    alert('Error', 'Failed to send OTP. Please try again.');
  } finally {
    setIsLoading(false);
  }
};

export const addEstatePassword = async ({
  password,
  setToken,
}) => {
  try {
      const id = await getFromSecureStore('letyn_user_id');
      const response = await fetch('http://localhost:3000/estates/add-estate-password', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              password: password,
              estateId: id,
          }),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      await SecureStore.setItemAsync('letyn_token', JSON.stringify(
        {
          city: data.city, 
          state: data.state, 
          postal_code: data.postal_code, 
          country: data.country,
          token: data.token,
          estateName: data.estateName,
          estateId:  data.estateId
        }
      ));
      
      setToken(true);
  } catch (error) {
      console.error('Error making POST request:', error);
  }
};

export const handleButtonClick = async ({ estateName, password, setMatches, setModal }) => {
  if (!estateName.trim()) {
      alert('Please enter the estate name');
      return;
  }

  if (!password.trim()) {
      alert('Please enter your password');
      return;
  }

  try {
      const response = await axios.post('http://localhost:3000/estates/search-estate-details', { estateName });
      if (response.status === 200 && response.data) {
          const matchingEstates = response.data.estates.filter(
            estate => estate.estateName.toLowerCase() === estateName.toLowerCase()
          );
          setMatches(matchingEstates);
          setModal(true);
      } else {
          alert('No estates found for the given name.');
      }
  } catch (error) {
      console.error('Error fetching estate details:', error);
      alert('An error occurred while fetching estate details. Please try again.');
  }
};

export const selectOption = async ({ name, id, password, setEstateLogin, setToken, setModal }) => {
  try {
    setEstateLogin({ estateName: name, estateId: id });
    const response = await axios.post('http://localhost:3000/estates/verify-estate-password', {
      estateId: id,
      password
    });

    await SecureStore.setItemAsync('letyn_token', response.data.token);
    await SecureStore.setItemAsync('letyn_estate_name', response.data.estateName);
    await SecureStore.setItemAsync('letyn_address', response.data.formattedAddress);
    await SecureStore.setItemAsync('letyn_user_id', response.data.estateId);

    setModal(false);
    setToken(true);

  } catch (error) {
    console.error('Error during estate verification:', error);
    setModal(false);
  }
};
