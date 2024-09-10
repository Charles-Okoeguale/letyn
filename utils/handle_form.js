import { checkEstateExists, fetchEstates } from "./api_calls";

export const handleButtonClick = async (estateRegister, setLoading, setEstates, setModal) => {
    setLoading(true);
    if (isFormValid(estateRegister)) {
      await fetchEstates(estateRegister, setEstates, setModal);
      setLoading(false);
    } else {
      setLoading(false);
      alert('Incomplete Form');
    }
};

export const validatePassword = (password) => {
  const regex = {
    minLength: /.{8,}/,
    lowercase: /[a-z]/,
    uppercase: /[A-Z]/,
    digit: /\d/,
    specialChar: /[!@#$%^&*(),.?":{}|<>]/,
  };

  const isMinLength = regex.minLength.test(password);
  const hasLowercase = regex.lowercase.test(password);
  const hasUppercase = regex.uppercase.test(password);
  const hasDigit = regex.digit.test(password);
  const hasSpecialChar = regex.specialChar.test(password);

  if (!isMinLength) {
    return { valid: false, message: 'Password must be at least 8 characters long' };
  } else if (!hasLowercase) {
    return { valid: false, message: 'Password must contain at least one lowercase letter' };
  } else if (!hasUppercase) {
    return { valid: false, message: 'Password must contain at least one uppercase letter' };
  } else if (!hasDigit) {
    return { valid: false, message: 'Password must contain at least one digit' };
  } else if (!hasSpecialChar) {
    return { valid: false, message: 'Password must contain at least one special character' };
  } else {
    return { valid: true, message: 'Password is valid' };
  }
};


export const validatePhoneNumber = (phoneNumber) => {
const phoneRegex = /^0[789]\d{9}$/;
if (!phoneRegex.test(phoneNumber)) {
  Alert.alert('Invalid information', 'Please enter your phone number');
} else;
};

export const isFormValid = (estateRegister) => {
  return (
    estateRegister.estateName.trim() !== '' &&
    estateRegister.country.trim() !== '' &&
    estateRegister.state.trim() !== '' &&
    estateRegister.city.trim() !== ''
  );
};

export function extractPostalCode(formattedAddress) {
  const postalCodePattern = /\b\d{6}\b/;
  const match = formattedAddress.match(postalCodePattern);
  return match ? match[0] : null;
}

export async function handleEstateRegistration(estate, estateRegister, setEstateRegister, setModal, navigation) {
  try {
    let postal_code = await extractPostalCode(estate.address);
    const exists = await checkEstateExists(estateRegister.estateName, postal_code);
    
    if (exists) {
      console.log('Estate account already exists.');
      return false;
    }
  
    await setEstateRegister(prevState => ({
      ...prevState,
      headOfficeAddress: estate.address,
      googlePlaceId: estate.place_id,
      geometry: estate.geometry,
      types: estate.types,
      profile_pic: estate.profile_pic,
      postal_code: postal_code
    }));

    setModal(false);
    setTimeout(() => {
      navigation.navigate("AddPhoneNumber");
    }, 1000)
    return true;
  } catch (error) {
    if (error.message === 'Database error') {
      console.error('A database error occurred:', error);
      throw new Error('An error occurred while checking the estate. Please try again later.');
    } else if (error.message === 'Estate already exists') {
      console.log('Estate already exists');
      return false;
    } else {
      console.error('An unexpected error occurred:', error);
      throw new Error('An unexpected error occurred. Please try again.');
    }
  }}
