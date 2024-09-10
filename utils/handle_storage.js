import * as SecureStore from 'expo-secure-store';
  
export const getDetailsFromSecureStore = async (key, setStateFunction) => {
  try {
    const storedValue = await SecureStore.getItemAsync(key);
    if (storedValue) {
      const parsedData = JSON.parse(storedValue);
      setStateFunction(parsedData); 
    } else {
      console.log(`No data found for key: ${key}`);
    }
  } catch (error) {
    console.error(`Error fetching data for key ${key}:`, error);
  }
};


