import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();
export const FormProvider = ({ children }) => {
    const [estateRegister, setEstateRegister] = useState({
        estateName: '',
        country: '',
        state: '',
        city: '',
        phoneNumber: '',
        password: '',
        otp:Array(4).fill(''),
        headOfficeAddress: '',
        geometry: {},
        googlePlaceId: '',
        types: [],
        profile_pic: '',
        postal_code: ''
    });

    const [estateLogin, setEstateLogin] = useState({
      estateName: '',
      password: '',
      estateId: ''
    })

    const [authenticated, setAuthenticated] = useState(false)
    const [estateId, setEstateId] = useState(null);
    const [options, setOptions] = useState(null)
    const [loading, setLoading] = useState(false)
    const numInputs = 4;
    const [otp, setOtp] = useState(Array(numInputs).fill(''));
    const [token, setToken] = useState(false)
    const [checked, setChecked] = useState(false)

    return (
        <FormContext.Provider value={{
            estateRegister, 
            setEstateRegister, 
            loading, 
            setLoading, 
            otp, 
            setOtp, 
            numInputs, 
            estateLogin, 
            setEstateLogin, 
            options, 
            setOptions, 
            estateId, 
            setEstateId,
            authenticated,
            setAuthenticated,
            token,
            setToken,
            checked,
            setChecked,
        }}>
            {children}
        </FormContext.Provider>
    );
};

export const useForm = () => useContext(FormContext);
