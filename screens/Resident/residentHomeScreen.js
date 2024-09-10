import { StyleSheet, View, StatusBar, ScrollView, Text } from 'react-native';
import Header from '../../components/header';
import CustomButton from '../../components/button';

const ResidentHomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Header/>
      <ScrollView contentContainerStyle={styles.contentContainerStyle} style={{flex: 1}}>
        <View style={{gap: 7, alignItems: 'center', marginTop: 31}}>
            <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 700}}>Need</Text>
            <Text style={{color: '#F91212', fontSize: 20, fontWeight: 700}}>Emergency</Text>
            <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 700}}>help?</Text>
        </View>
        <CustomButton 
            iconName={'power-off'} 
            iconSize={120} 
            buttonColor={'#000000'} 
            width={200} 
            height={200} 
            iconColor={'#F91212'}
            style={{borderRadius: 150, alignSelf: 'center', marginTop: 23, justifyContent: 'center'}}
        />
        <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 700, marginLeft: 20, marginTop: 50}}>Lists</Text>
        <View style={{flexDirection: 'row', gap: 10, justifyContent: 'center'}}>
            <CustomButton 
                text={'Residents'}
                fontSize={20}
                textColor={'white'}
                buttonColor={'#000000'} 
                width={200} 
                height={200} 
                style={{borderRadius: 50, alignSelf: 'center', marginTop: 23, justifyContent: 'center'}}
            />
             <CustomButton 
                text={'Visitors'}
                fontSize={20}
                textColor={'white'}
                buttonColor={'#000000'} 
                width={200} 
                height={200} 
                style={{borderRadius: 50, alignSelf: 'center', marginTop: 23, justifyContent: 'center'}}
            />
        </View>
      </ScrollView>
    </View>
  )
}

export default ResidentHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
  Esname: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  Eslocation: {
    color: 'white'
  },
  containerStyle: {
    width: 400, 
    borderRadius: 10, 
    borderWidth: 2, 
    backgroundColor: '#1D1C1C',
    alignSelf: 'center',
    marginTop: 25
  },
  inputContainerStyle: {
      borderBottomColor: null, 
      borderBottomWidth: 0, 
      paddingTop: 7,
      fontSize: 14, 
  },
  inputStyle: {
      color: 'white', 
      fontFamily: 'Light', 
      paddingTop: 15, 
      paddingLeft: 10
  },
  rightIconContainerStyle: {
      paddingTop: 15,
      paddingLeft: 10
  }
});
