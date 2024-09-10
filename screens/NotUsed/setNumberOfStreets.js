import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
import NumberOfItems from '../../components/numberOfItems';
import { calculateEm, calculateFontsize } from '../../utils/helpers';
import Street from '../../components/street';
import FloatingButton from '../../components/Buttons/floatingButton';

const SetNumberOfStreets = ({navigation}) => {
    const [streets, setStreets] = useState([{ number : 0 }]);
  
    const setNoStreets = () => {
      navigation.navigate("ResidenceLayout")
    }

    const updateNumberOfResidences = (index, delta) => {
        setStreets(prevStreets => {
          const updatedStreets = [...prevStreets];
          updatedStreets[index].number = Math.max(updatedStreets[index].number + delta, 0); 
          return updatedStreets;
        });
      };

      const addStreet = () => {
        setStreets(prevStreets => [...prevStreets, { number: 0 }]);
      };
      
      const removeStreet = () => {
        setStreets(prevStreets => prevStreets.slice(0, -1));
      };

    return (
        <SafeAreaView style={styles.container}>
           <NumberOfItems
                placeholder={'Number of streets'} 
                number={streets.length} 
                add={() => addStreet()} 
                subtract={() => removeStreet()}
                style={styles.street}
           />
           <ScrollView style={styles.scrollArea}>
            {streets.map((street, index) => 
                <Street 
                    key={index} 
                    index={index} 
                    street={street} 
                    updateNumberOfResidences={updateNumberOfResidences} 
                />
            )}
           </ScrollView>
           <FloatingButton onPress={setNoStreets}/>
        </SafeAreaView>
    )
}

export default SetNumberOfStreets;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      alignItems: 'center',
      gap: 20
    },
    scrollArea: {
        flex: 1, 
        paddingTop: calculateEm(10), 
        width: '100%'
    },
    street: {
        marginTop: calculateEm(100)
    },
    text: {
        color: '#000000', 
        fontSize: calculateFontsize(18), 
        alignSelf: 'center',
        marginTop: 50,
        fontFamily: 'Bold'
    },
});