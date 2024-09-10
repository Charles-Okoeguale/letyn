import { StyleSheet, View, Text, SafeAreaView, Dimensions } from 'react-native';
import NumberOfItems from '../../components/numberOfItems';
import CustomComponent from '../../components/addResident';
import CustomButton from '../../components/button';

const AddResidents = () => {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Add resident</Text>
        <NumberOfItems placeholder={'No of residents'} style={{marginTop: 50}}/>
        <View style={{marginTop: 50}}>
        <CustomComponent/>
        </View>
        <View style={{flexDirection: 'row', marginTop: 50, justifyContent: 'flex-end', gap: 10}}>
            <CustomButton text={'Cancel'} buttonColor={'#000000'} textColor={'#FFFFFF'} width={166} height={63}/>
            <CustomButton text={'Add'} buttonColor={'#FFFFFF'} width={166} height={63}/>
        </View>
        </SafeAreaView>
    )
}

export default AddResidents;

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
