import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import StreetList from '../../components/streetList';
import CustomButton from '../../components/button';
import Container from '../../components/Container/container';

const AddPhonenumber = ({setModalVisible}) => {
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
        <StreetList text1={'Phone number'} text2={'House no'}/>
        <View style={{flexDirection: 'row', height: 80, justifyContent: 'flex-end', gap: 15}}>
            <CustomButton text={'Cancel'} textColor={'#FFFFFF'} buttonColor={'#000000'} style={{width: 108, height: 60}} onClick={handlePress}/>
            <CustomButton text={'Save'} buttonColor={'#FFFFFF'} style={{width: 108, height: 60}} onClick={handlePress}/>
        </View>
        </SafeAreaView>
    )
}

export default AddPhonenumber;

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
