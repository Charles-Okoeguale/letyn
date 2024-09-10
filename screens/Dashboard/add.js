import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import {  useState } from 'react';
import { calculateEm, calculateFontsize } from '../../utils/helpers';
import Visitors from '../../components/visitors';
import NumberOfItems from '../../components/numberOfItems';
import CustomModal from '../../components/modal';
import AddItems from '../addItems';
import FloatingButton from '../../components/Buttons/floatingButton';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

const AddScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentVisitorIndex, setCurrentVisitorIndex] = useState(null);
    const [visitors, setVisitors] = useState([]);
    const [details, setDetails] = useState()


    const handleInputChange = (index, field, value) => {
        const updatedVisitors = [...visitors];
        updatedVisitors[index][field] = value;
        setVisitors(updatedVisitors);
    };

    const handleOpenModal = (index) => {
        setCurrentVisitorIndex(index);
        setModalVisible(true);
    };

    const addVisitor = () => {
        setVisitors(prevVisitors => [...prevVisitors, { name: '', phoneNumber: '', items: [], timeIn: 'in', timeOut: 'out' }]);
    };
      
    const subtractVisitor = () => {
        if (visitors.length > 0) {
            setVisitors(prevVisitors => prevVisitors.slice(0, -1));
        }
    };

    const handlePress = async () => {
        const hasAllRequiredFields = visitors.every(visitor => {
            return visitor.name && visitor.phoneNumber;
        });
        if (!hasAllRequiredFields) {
            alert('Each visitor must have a name and phone number.');
            return;
        }
        
        const storedValue = await SecureStore.getItemAsync('letyn_token');
        if (storedValue) {
            const parsedData = JSON.parse(storedValue);
            const estateId = parsedData.estateId
            const authToken = parsedData.token
            const response = await axios.post(
                'http://localhost:3000/estates/add-visitors',
                {
                    estateId,
                    authToken,
                    visitors
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${parsedData.token}`,
                    }
                }
            );
            console.log(response.data, 'added')
            setVisitors([])
          } else {
            console.log(`No data found for key: ${key}`);

            //logout
          }
        // setVisitors([])
    };

    const handleAddItemToVisitor = (updatedItems) => {
        if (currentVisitorIndex !== null) {
            setVisitors(prevVisitors => {
                const updatedVisitors = [...prevVisitors];
                updatedVisitors[currentVisitorIndex].items = updatedItems;
                return updatedVisitors;
            });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
           <Text style={styles.text}>Add visitor(s)</Text>
           <NumberOfItems 
                placeholder={'Number of visitors'} 
                number={visitors.length} 
                add={addVisitor} 
                subtract={subtractVisitor}
            />
           <ScrollView style={{flex: 1, paddingTop: calculateEm(10), width: '100%'}}>
           {visitors.map((visitor, index) => (
                <Visitors
                    key={index}
                    index={index}
                    visitor={visitor}
                    handleOpenModal={() => handleOpenModal(index)}
                    onInputChange={(field, value) => handleInputChange(index, field, value)}
                />
            ))}
           </ScrollView>
           <FloatingButton onPress={handlePress}/>
           <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)}>
                <AddItems
                    setModalVisible={setModalVisible} 
                    handleAddItem={handleAddItemToVisitor}
                    visitorItems={currentVisitorIndex !== null ? visitors[currentVisitorIndex]?.items : []}
                />
            </CustomModal>
        </SafeAreaView>
    );
};

export default AddScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
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
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        zIndex: 10,
      },
});