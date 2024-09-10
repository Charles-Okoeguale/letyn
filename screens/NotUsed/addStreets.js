import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import NumberOfItems from '../../components/numberOfItems';
import Container from '../../components/Container/container';
import CustomButton from '../../components/button';
import StreetList from '../../components/streetList';

const AddStreets = ({setModalVisible}) => {
    const handlePress = () => {
        setModalVisible(false)
    };
    return (
        <SafeAreaView style={styles.container}>
        <Container 
            text={null} 
            iconColor={'#FFFFFF'} 
            iconSize={30} 
            iconName={'angle-left'} 
            style={{marginLeft: 5, width: 68, height: 63}}
            onClick={handlePress}
        />
        <Text style={styles.text}>Suncity Estate</Text>
        <Text style={styles.text}>Lokogoma, Abuja.</Text>
        <NumberOfItems placeholder={'Number of items'} type={'Set'} style={{marginTop: 50}}/>
        <StreetList text1={'Name of street'} text2={'No of residences'}/>
        <View style={{flexDirection: 'row', height: 80, justifyContent: 'flex-end', gap: 15}}>
            <CustomButton text={'Cancel'} textColor={'#FFFFFF'} buttonColor={'#000000'} style={{width: 108, height: 60}} onClick={handlePress}/>
            <CustomButton text={'Add'} buttonColor={'#FFFFFF'} style={{width: 108, height: 60}} onClick={handlePress}/>
        </View>
        </SafeAreaView>
    )
}

export default AddStreets;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      width: '100%',
    },
    text: {
        color: 'white', 
        fontSize: 20, 
        alignSelf: 'center',
        fontFamily: 'Bold'
    },
});
