import { StyleSheet, View, Text, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import { calculateEm, calculateFontsize } from '../../utils/helpers';
import { SearchSvg } from '../../components/SVGs/search';
import CustomTable from '../../components/customTable';
import CustomModal from '../../components/modal';
import Container from '../../components/Container/container';
import NameCard from '../../components/nameCard';
import { TouchableOpacity } from 'react-native';
import { SolidSvg } from '../../components/SVGs/arrow';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

const tableHead = ['Name', 'Phone number', 'Time in'];
const widthArr = [190, 155, 70]; 

const ListScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [selectedVisitorIds, setSelectedVisitorIds] = useState([]);


    const toggleSelection = (visitorId) => {
        setSelectedVisitorIds(prevIds =>
            prevIds.includes(visitorId)
                ? prevIds.filter(id => id !== visitorId)
                : [...prevIds, visitorId]
        );
    };
    

    const handleBatchDelete = () => {
        handleDelete(selectedVisitorIds);
        setSelectedVisitorIds([]); 
    };

    const handleRowClick = (index, data) => {
        setModalVisible(true)
    };
    const handlePress = () => {
        setModalVisible(false)
    }

    const transformData = (data) => {
        return data.map(visitor => [
          visitor.name,
          visitor.phoneNumber,
          visitor.timeIn,
          visitor.id
        ]);
    };

    useEffect(() => {
        const fetchVisitors = async () => {
        const storedValue = await SecureStore.getItemAsync('letyn_token');
        if (storedValue) {
            try {
                const parsedData = JSON.parse(storedValue);
                const estateId = parsedData.estateId
                const authToken = parsedData.token
                const response = await axios.get('http://localhost:3000/estates/get-visitors', {
                    params: { estateId }
                });
                const transformedData = transformData(response.data.visitors);
                setTableData(transformedData);
            } catch (error) {
                console.error('Error removing visitors:', error.response ? error.response.data : error.message);
            }
            
        }
        };
    
        fetchVisitors(); 
      }, []);



        const handleEdit = (index) => {
            console.log('Edit row at index:', index);
            // setSelectedRow(index);
        };


        const handleDelete = (index, data) => {
            const id = data[3];
            setSelectedVisitorIds(prevIds => {
                if (timerRef.current) {
                    clearTimeout(timerRef.current);
                }
                const updatedIds = [...prevIds, id];
                timerRef.current = setTimeout(() => {
                    console.log('start');
                }, 7000);
                return updatedIds;
            });
        };
        
        useEffect(() => {
            return () => {
                if (timerRef.current) {
                    clearTimeout(timerRef.current);
                }
            };
        }, []);

        const signOutVisitor = async (visitorIds) => {
            const storedValue = await SecureStore.getItemAsync('letyn_token');

            if (storedValue) {
                const parsedData = JSON.parse(storedValue);
                const estateId = parsedData.estateId
                const authToken = parsedData.token
                try {
                    // Make the API call to remove a batch of visitors
                    const response = await axios.post(
                        'http://localhost:3000/estates/remove-visitors',
                        {
                            estateId,
                            selectedVisitorIds// Pass the array of visitor IDs to remove
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `${authToken}`
                            }
                        }
                    );
            
                    console.log('Response:', response.data);
            
                    // Update the local state to remove the batch of visitors from the table
                    setTableData(prevTableData =>
                        prevTableData.filter(visitor => !visitorIds.includes(visitor.id))
                    );
            
                } catch (error) {
                    console.error('Error removing visitors:', error.response ? error.response.data : error.message);
                }
            }
        };
        

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
            <View style={styles.searchIconContainer}>
                <SearchSvg height={calculateEm(18)} width={calculateEm(18)} />
            </View>
            <TextInput
                style={styles.input}
                placeholder={'Search for visitor'}
                placeholderTextColor={'#000000'}
                // onChangeText={''}
                value={''}
            />
        </View>
        <View style={styles.statusContainer}>
            <View style={styles.statusIndicator} />
            <Text style={styles.statusText}>Item available</Text>
        </View>
        <ScrollView style={styles.scrollView}>
            <CustomTable
                tableHead={tableHead}
                tableData={tableData}
                widthArr={widthArr}
                handlePress={handlePress}
                handleRowClick={handleRowClick}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </ScrollView>
        <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)}>
            <SafeAreaView style={styles.modalContainer}>
                <Container
                    text={null}
                    iconColor={'#000000'}
                    iconSize={30}
                    iconName={'close'}
                    style={styles.modalCloseIcon}
                    onClick={handlePress}
                />
                <Text style={styles.modalTitle}>Visitor info</Text>
                <NameCard name={'Name'} value={'Charles Okoeguale'} />
                <NameCard name={'Phone number'} value={'09134954970'} />
                <NameCard name={'Time in'} value={'9:00PM'} />
                <NameCard name={'Time out'} value={'4:00AM'} />
                <Text style={styles.itemsTitle}>Items</Text>
                <NameCard value={'Washing machine'} no={'No'} number={'3'} />
                <NameCard value={'Spoons'} no={'No'} number={'10'} />
                <TouchableOpacity style={styles.floatingButton}>
                    <SolidSvg color={'red'} height={calculateEm(50)} width={calculateEm(50)} />
                </TouchableOpacity>
            </SafeAreaView>
        </CustomModal>
    </SafeAreaView>
    )
}

export default ListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        gap: 30,
    },
    searchContainer: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: calculateEm(5),
        marginTop: calculateEm(30),
    },
    searchIconContainer: {
        width: calculateEm(50),
        height: calculateEm(50),
        borderRadius: calculateEm(30),
        backgroundColor: '#E8E8E8',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: calculateEm(30),
    },
    input: {
        width: '75%',
        borderRadius: 10,
        backgroundColor: '#E8E8E8',
        height: calculateEm(53),
        color: '#000000',
        paddingLeft: 15,
        fontFamily: 'SLight',
        fontSize: calculateFontsize(14),
        marginTop: calculateEm(30),
    },
    statusContainer: {
        width: '35%',
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
        paddingLeft: calculateEm(10),
        alignSelf: 'flex-end'
    },
    statusIndicator: {
        width: 20,
        height: 20,
        borderRadius: 3,
        backgroundColor: 'lightgreen',
    },
    statusText: {
        fontFamily: 'SBold',
    },
    scrollView: {
        width: '100%',
        flex: 1,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width: '100%',
    },
    modalCloseIcon: {
        marginLeft: 'auto',
        width: 68,
        height: 63,
    },
    modalTitle: {
        color: '#000000',
        fontSize: calculateFontsize(25),
        marginTop: calculateEm(5),
        fontFamily: 'Bold',
        paddingLeft: calculateEm(10),
        marginBottom: calculateEm(30),
    },
    itemsTitle: {
        fontFamily: 'Bold',
        fontSize: calculateFontsize(20),
        paddingLeft: calculateEm(10),
        marginTop: calculateEm(25),
        marginBottom: calculateEm(10),
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
