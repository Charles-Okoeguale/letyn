import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import { useState } from 'react';
import NumberOfItems from '../../components/numberOfItems';
import Street from '../../components/street';
import { SolidSvg } from '../../components/SVGs/arrow';
import { calculateEm, calculateFontsize } from '../../utils/helpers';
import Flat from '../../components/flat';

const SetFlats = ({navigation}) => {
    const [noofstreets, setNoofstreets] = useState(1)
    const [modalVisible, setModalVisible] = useState(false);
    const array = Array.from({ length: noofstreets }, (_, index) => index + 1);


    const handleAddItem = (index) => {
        setModalVisible(true)
    }

    const setNoStreets = () => {
        // navigation.navigate("AddPhonenumber")
    }
    return (
        <SafeAreaView style={styles.container}>
           <Text style={styles.text}>Flats</Text>
           <ScrollView style={{flex: 1, paddingTop: calculateEm(10), width: '100%'}}>
            {array.map((value, index) => <Flat index={index} handleOpenModal={handleAddItem} noofstreets={noofstreets}/>)}
           </ScrollView>
            <View style={styles.floatingButton} onPress={setNoStreets}>
                <SolidSvg color={'#000000'} height={calculateEm(50)} width={calculateEm(50)} handleClick={setNoStreets}/>
            </View>
        </SafeAreaView>
    )
}

export default SetFlats;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      gap: 20
    },
    text: {
        color: '#000000', 
        fontSize: calculateFontsize(18), 
        alignSelf: 'center',
        marginTop: 50,
        fontFamily: 'Bold'
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30, // Makes the button circular
        backgroundColor: '#FFFFFF', // Button color
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5, // Shadow effect for Android
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: { width: 0, height: 1 }, // Shadow offset for iOS
        shadowOpacity: 0.3, // Shadow opacity for iOS
        shadowRadius: 4, // Shadow blur radius for iOS
        zIndex: 10, // Ensure it appears on top
      },
});