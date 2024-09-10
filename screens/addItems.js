import { StyleSheet, Text } from 'react-native';
import NumberOfItems from '../components/numberOfItems';
import Container from '../components/Container/container';
import { calculateEm, calculateFontsize } from '../utils/helpers';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import VisitorItem from '../components/visitorItem';
import FloatingButton from '../components/Buttons/floatingButton';

const AddItems = ({ setModalVisible, handleAddItem, visitorItems }) => {
    const [items, setItems] = useState(visitorItems);

    const handlePress = () => {
        const hasUnnamedItem = items.some(item => !item.name || item.name.trim() === '');
    
        if (hasUnnamedItem) {
            alert('Every item should have a name.');
        } else {
            setModalVisible(false)
        }
    };

    const addItem = () => {
        setItems(prevItems => [...prevItems, { name: '', noitems: 1 }]);
    };

    const subtractItem = () => {
        if (items.length > 0) {
            const updatedItems = items.slice(0, -1); 
            setItems(updatedItems); 
            handleAddItem(updatedItems);
        }
    };

    const handleItemNameChange = (index, name) => {
        const updatedItems = [...items];
        updatedItems[index].name = name;
        setItems(updatedItems);
        handleAddItem(updatedItems);
    };

    const addNoitem = (index) => {
        setItems(prevItems => {
            const updatedItems = [...prevItems];
            updatedItems[index].noitems = (updatedItems[index].noitems || 0) + 1; 
            return updatedItems;
        });
    };

    const subtractNoOfItem = (index) => {
        if (items[index]["noitems"] > 1) {
            setItems(prevItems => {
                const updatedItems = [...prevItems];
                updatedItems[index].noitems = (updatedItems[index].noitems || 0) - 1; 
                return updatedItems;
            });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Container 
                text={null} 
                iconColor={'#000000'} 
                iconSize={30} 
                iconName={'angle-down'} 
                style={{marginLeft: 5, width: 68, height: 63}}
                onClick={handlePress}
            />
           <Text style={styles.text}>Add item(s)</Text>
           <NumberOfItems 
                placeholder={'Number of items'} 
                number={items.length} 
                add={addItem}
                subtract={subtractItem}
            />
           <ScrollView contentContainerStyle={{
                alignItems: 'center',
                flex: 1, 
                paddingTop: calculateEm(10), 
                width: '100%'
            }}>
            {items.map((item, index) => 
                <VisitorItem 
                    key={index}
                    index={index}
                    placeholder={'Name of item'} 
                    value={item.name}
                    noOfItem={item.noitems}
                    onChange={(text) => handleItemNameChange(index, text)}
                    style={{width: '90%'}}
                    add={() => addNoitem(index)}
                    subtract={() => subtractNoOfItem(index)}
                />
            )}
           </ScrollView>
            <FloatingButton onPress={handlePress} />
        </SafeAreaView>
    );
};

export default AddItems;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      alignItems: 'center',
      gap: 20,
      width: '100%'
    },
    text: {
        color: '#000000', 
        fontSize: calculateFontsize(18), 
        alignSelf: 'center',
        marginTop: calculateEm(5),
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
