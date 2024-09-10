import { StyleSheet, View, TextInput } from 'react-native';
import { calculateEm, calculateFontsize } from '../utils/helpers';
import NumberOfItems from './numberOfItems';

const Street = ({index, updateNumberOfResidences, street }) => {
    return (
        <View style={styles.body} key={index}>
                <TextInput
                    style={styles.input}
                    placeholder={'Enter name of street'} 
                    placeholderTextColor={'#000000'}
                    onChangeText={''}
                    value={street.name || ''}
                />
               <NumberOfItems
                    placeholder={'Number of residences'} 
                    number={street.number} 
                    style={styles.main}
                    add={() => updateNumberOfResidences(index, 1)}
                    subtract={() => updateNumberOfResidences(index, -1)}
                />
        </View>
    )
}

export default Street;

const styles = StyleSheet.create({
    body: {
        width: '100%',
        gap: 0.5,
        height: calculateEm(150),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: calculateEm(10),
        gap: calculateEm(10),
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        marginBottom: calculateEm(40)
        
    },
    input: {
        width: '95%',
        borderRadius: 10,
        height: calculateEm(53),
        color: '#000000',
        paddingLeft: 15,
        fontFamily: 'SLight',
        fontSize: calculateFontsize(14),
        backgroundColor: '#FFFFFF'
      },
    main: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 5,
        justifyContent: 'space-between',
    }
});