import { StyleSheet, View, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
import { calculateEm, calculateFontsize, capitalizeFirstLetter } from '../../utils/helpers';
import { SearchSvg } from '../../components/SVGs/search';
import { Text } from 'react-native';
import NoResidencesComponent from '../../components/no_residence';
import {useEstateDetails} from '../../hooks/useEstateDetails'


const ResidenceScreen = ({navigation}) => {
  const details = useEstateDetails();

  if (!details) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.text}>{capitalizeFirstLetter(details?.estateName)}</Text>
        <Text style={[styles.text, {fontSize: calculateFontsize(12), fontFamily: 'SLight', marginTop: calculateEm(5)}]}>{details?.city}, {details?.state}, {details?.country}</Text>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.searchContainer}>
            <View style={styles.searchIconContainer}>
              <SearchSvg height={calculateEm(18)} width={calculateEm(18)}/>
            </View>
            <TextInput
              style={styles.input}
              placeholder={'Search for residence address'} 
              placeholderTextColor={'#000000'}
              value={''}
            />
          </View>
          <NoResidencesComponent navigation={navigation}/>
        </ScrollView>
      </SafeAreaView>
    </View>
  
  )
}

export default ResidenceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: calculateEm(5),
  },
  searchIconContainer: {
    width: calculateEm(50),
    height: calculateEm(50),
    borderRadius: calculateEm(30),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: calculateEm(30),
  },
  input: {
    width: '75%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    height: calculateEm(53),
    color: '#000000',
    paddingLeft: 15,
    fontFamily: 'SLight',
    fontSize: calculateFontsize(14),
    marginTop: calculateEm(30),
  },
  text: {
    color: '#000000', 
    fontSize: calculateFontsize(18), 
    alignSelf: 'center',
    marginTop: 50,
    fontFamily: 'Bold',
  },
  residenceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    flex: 1,
  },
  residenceText: {
    fontSize: calculateFontsize(40),
    fontFamily: 'SLight',
  },
  noResidenceText: {
    fontSize: calculateFontsize(12),
    fontFamily: 'SLight',
  },
});





