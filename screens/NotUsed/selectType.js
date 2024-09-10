import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Container from '../../components/Container/container';
import StreetList from '../../components/streetList';
import CustomButton from '../../components/button';
import ResidenceType from '../../components/type';


const SelectType = ({setModalVisible}) => {
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
        <Text style={styles.text}>Select residence types</Text>
        <ResidenceType/>
        <View style={{flexDirection: 'row', height: 80, justifyContent: 'center', gap: 15, marginTop: 300 }}>
            <CustomButton text={'Save'} buttonColor={'#FFFFFF'} style={{width: 400, height: 60}}/>
        </View>
        </SafeAreaView>
    )
}

export default SelectType;

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
        fontFamily: 'Bold',
        marginTop: 20
    },
});
