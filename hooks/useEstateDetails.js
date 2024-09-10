import { useState, useEffect } from 'react';
import { getDetailsFromSecureStore } from '../utils/handle_storage';

export const useEstateDetails = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getDetailsFromSecureStore('letyn_token', setDetails);
  }, []);

  return details;
};
