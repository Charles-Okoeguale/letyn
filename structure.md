To create an accurate relationship between individual estates, their streets, and homes for each street, 
you'll need to consider the specific information that accurately represents the relationships and attributes of each entity. 
Here's a breakdown of the information you might need for each entity:

Estates:
Estate ID: A unique identifier for each estate.
Community Name: The name of the community or estate.
Location: The location of the estate, which could include details such as latitude and longitude coordinates, address, or geographical region.
Country, State, City: Details about the country, state, and city where the estate is located.
Additional Information: Any additional details or attributes specific to each estate, such as size, amenities, management details, etc.

Streets:
Street ID: A unique identifier for each street within an estate.
Street Name: The name or identifier of the street.
Associated Estate ID: The ID of the estate to which the street belongs. This establishes the relationship between streets and estates.
Additional Information: Any additional details or attributes specific to each street, such as length, width, number of houses, etc.

Homes (or Houses):
House ID: A unique identifier for each home or house.
House Number: The house number or identifier.
Associated Street ID: The ID of the street to which the house belongs. This establishes the relationship between houses and streets.
Associated Estate ID: The ID of the estate to which the house belongs. This can provide redundancy for querying and establish a clear hierarchy.
Additional Information: Any additional details or attributes specific to each house, such as size, number of bedrooms, ownership status, etc.

Profiles:
Profile ID: A unique identifier for each profile within a home.
Home ID: The ID of the home to which the profile belongs.
Profile Name: The name or identifier of the profile (e.g., "John's Profile").
Password: The password associated with the profile for authentication.
Settings and Preferences: Any additional settings or preferences specific to each profile, such as language, content restrictions, etc.






FEATURES For Letyn V1

1. Authentication (Estate Register, Estate Login, Resident Login)
2. Address Validation
3. Add Residence, 
4. Add Visitor,
5. Trigger Alarm and place location.



  // useEffect(() => {
  //  fetchCountries(setCountries);
  // }, []);

  // useEffect(() => {
  //   if (estateRegister.country) {
  //     fetchStates(estateRegister.iso2, setStates);
  //   }
  // }, [estateRegister.country]);

  // useEffect(() => {
  //   if (estateRegister.state) {
  //     fetchCities(estateRegister.iso2, estateRegister.stateIso2, setCities);
  //   }
  // }, [estateRegister.state]);



     <View style={{
        width: calculateEm(50),
        height: calculateEm(50),
        borderRadius: calculateEm(30),
        backgroundColor: '#E8E8E8',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: calculateEm(30)
    }}>
         <SearchSvg height={calculateEm(18)} width={calculateEm(18)}/>
    </View>


     // deleteItemFromAsyncStorage('letyn_token');
        // deleteItemFromAsyncStorage('letyn_user_id');
        // deleteItemFromAsyncStorage('letyn_estate_name');
        // deleteItemFromAsyncStorage('letyn_address');
        // setToken(false);

           // {name: "Delete Account", icon: 'trash-o'},



           {/* <NumberGrid length={10}/> */}
           {/* <ResidenceCard
            residenceName="Romford Street"
            numberOfResidences={26}
           /> */}





      {/* <CustomButton
          text={'Login'}
          fontFamily={'Bold'}
          fontSize={calculateFontsize(14)}
          buttonStyle={styles.button}
          onClick={() => navigation.navigate('AddPhoneNumber')}
          textStyle={styles.text2}
          iconSize={20}
          loading={loading}
          iconColor={'#FFFFFF'}
          containerStyle={styles.buttonContainer}
      /> */}
    {/* <Text style={styles.titleText}>Register</Text>
    <Text style={styles.subtitleText}>Create your new estate account</Text>
    <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder={'Enter estate name'} 
        placeholderTextColor={'#9EA0A4'}
        onChangeText={(text) => setEstateRegister({ ...estateRegister, estateName: text })}
        value={estateRegister.estateName}
      />
      <RNPickerSelect
        onValueChange={(value) => {
          const selectedCountry = countries.find(country => country.value === value);
          if (selectedCountry) {
            setEstateRegister({ 
              ...estateRegister, 
              country: selectedCountry.label,
              iso2: selectedCountry.value
            });
          }
        }}
        items={countries.map(country => ({...country, value: country.value || ''}))} 
        style={pickerSelectStyles}
        placeholder={{ label: 'Select a country', value: null }}
        useNativeAndroidPickerStyle={false}
      />
      <RNPickerSelect
        onValueChange={(value) => {
          const selectedState = states.find(state => state.value === value);
          if (selectedState) {
            setEstateRegister({ 
              ...estateRegister, 
              state: selectedState.label,
              stateIso2: selectedState.value
            });
          }
        }}
        items={states.map(state => ({...state, value: state.value || ''}))}
        style={pickerSelectStyles}
        placeholder={{ label: 'Select a state', value: null }}
        useNativeAndroidPickerStyle={false}
      />
      <RNPickerSelect
        onValueChange={(value) => {
          const selectedCity = cities.find(city => city.value === value);
          if (selectedCity) {
            setEstateRegister({ 
              ...estateRegister, 
              city: selectedCity.label
            });
          }
        }}
        items={cities.map(city => ({...city, value: city.value || ''}))} 
        style={pickerSelectStyles}
        placeholder={{ label: 'Select a city', value: null }}
        useNativeAndroidPickerStyle={false}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          text={'Continue'}
          fontFamily={'Bold'}
          fontSize={calculateFontsize(14)}
          buttonStyle={styles.button}
          onClick={() => handleButtonClick(estateRegister, setLoading, setEstates, setModal)}
          textStyle={styles.text}
          iconSize={20}
          loading={loading}
          iconColor={'#FFFFFF'}
        />
      </View>
    </View>
    <Text style={styles.loginText}>
      Already have an account?
      <TouchableWithoutFeedback onPress={() => navigation.navigate('EstateLogin')}>
        <Text style={styles.loginLink}>{' '} Login</Text>
      </TouchableWithoutFeedback>
    </Text>
    <CustomModal
      visible={modal}
      onClose={() => setModal(false)}
      childComponent={EstateSelectionModal}
      childComponentProps={{
          setModal,
          estates,
          checkEstateExists,
          setEstateRegister,
          navigation
      }}
    /> */}

     // const [countries, setCountries] = useState([]);
     // import RNPickerSelect from 'react-native-picker-select';
     // import Container from '../../components/Container/container';


    // import { checkEstateExists, fetchCities, fetchCountries, fetchStates } from '../../utils/api_calls';
    // import { handleButtonClick } from '../../utils/handle_form';
    // import EstateSelectionModal from '../../components/estate_selection';
    // import CustomModal from '../../components/custom_modal';




    // useFocusEffect(
    //     useCallback(() => {
    //       return () => {
    //         Alert.alert(
    //             'Discard changes?',
    //             'You have unsaved changes. Are you sure you want to leave?',
    //             [
    //               { text: "Don't leave", style: 'cancel', onPress: () => {
    //                 navigation.navigate('Add Visitor');
    //               } },
    //               { text: 'Leave', style: 'destructive', onPress: (e) => {
    //                   setVisitors([])
    //                   navigation.dispatch(e.data.action);
    //                 }},
    //             ]
    //           );
    //       };
    //     }, [])
    //   );