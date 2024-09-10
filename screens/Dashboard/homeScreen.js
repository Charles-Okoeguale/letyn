import { StyleSheet, View, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../components/header';
import { TextInput } from 'react-native';
import { calculateEm, calculateFontsize } from '../../utils/helpers';
import CustomButton from '../../components/button';
import ResidenceInfo from '../../components/residenceInfo';
import { useForm } from '../../Context/FormContext';
import NoResidencesComponent from '../../components/no_residence';
import { useState } from 'react';

const HomeScreen = ({navigation}) => {
  const { loading } = useForm();
  const [set, setSet] = useState(false)
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <SafeAreaView style={{flex: 1}}>
        <Header navigation={navigation}/>
        <ScrollView 
          contentContainerStyle={{flex: 1}}
        >
          {set ? (
            <>
              <View style={{
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: calculateEm(5)
             }}>
                <TextInput
                  style={styles.input}
                  placeholder={'Search for residence address'} 
                  placeholderTextColor={'#000000'}
                  value={''}
                />
             </View>
             <CustomButton
                  text={'Search'}
                  fontFamily={'Bold'}
                  fontSize={calculateFontsize(14)}
                  buttonStyle={styles.button}
                  textStyle={styles.text2}
                  iconSize={20}
                  loading={loading}
                  iconColor={'#FFFFFF'}
                  containerStyle={styles.buttonContainer}
              />
            </>
          ) : (
            <NoResidencesComponent navigation={navigation}/>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  button: {
    height: calculateEm(52),
    borderRadius: 15,
    backgroundColor: '#000000',
    marginTop: calculateEm(70),
  },
  header: {
    height: '10%', 
    flexDirection: 'row', 
    paddingLeft: 10, 
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#3D3C3A',
    borderBottomWidth: 0.5
  },
  input: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#E8E8E8',
    height: calculateEm(53),
    color: '#000000',
    paddingLeft: 15,
    fontFamily: 'SLight',
    fontSize: calculateFontsize(14),
    marginTop: calculateEm(80)
  },
  buttonContainer: {
    width: '90%',
    marginTop: calculateEm(15),
    alignSelf: 'center'
},
  button: {
    height: calculateEm(52),
    borderRadius: 15,
    backgroundColor: '#000000',
  },
  text2: {
    color: '#FFFFFF',
    fontFamily: 'Bold',
},
});




