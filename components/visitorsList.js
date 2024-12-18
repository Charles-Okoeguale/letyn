import React from 'react';
import { View, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { useFonts } from 'expo-font';

const tableHead1 = ['Name', 'Phone number'];
const tableHead2 = ['Name', 'Phone number'];
const widthArr = [250, 130]; 
const name1 = [
    ['Charles Okoeguale', '09134954970'],
    ['Jane Ummenaihe', '07134754970'],
    ['John Doe', '09134954970'],
    ['Jane Smith','09134954970'],
    ['John Doe','09134954970'],
    ['Jane Smith','09134954970'], ['Jane Smith','09134954970'],
]

const name2 = [
    ['Charles Okoeguale', '09134954970', '9:00PM', ''],
    ['Charles Okoeguale', '09134954970', '9:00PM', ''],
]
const VisitorsList = ({ title, rows, style, type }) => {
    let [fontsLoaded, fontError] = useFonts({
        'SpaceGrotesk-Bold' : require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
        'SpaceGrotesk-Light' : require("../assets/fonts/SpaceGrotesk-Light.ttf"),
    });
    
    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={[styles.card, style]}>
            <Text style={styles.title}>{title}</Text>
            <Table borderStyle={{ borderWidth: 0 }}>
               {type === 'Visitor' && (
                <>
                     <Row
                    data={tableHead2}
                    style={{
                        backgroundColor: '#1D1C1C',
                        height: 45,
                        justifyContent: 'center',
                    }}
                    widthArr={widthArr} 
                    textStyle={{ 
                        color: 'white', 
                        fontSize: 14, 
                        fontFamily: 'SpaceGrotesk-Bold',
                        paddingLeft: 20
                    }}
                />
                {name2.map((name, index) => (
                    <Row
                        key={index}
                        data={name}
                        style={{
                            backgroundColor: '#1D1C1C',
                            borderColor: '#292525',
                            borderWidth: 0.2,
                            borderRadius: 4,
                            height: 55,
                            justifyContent: 'center'
                        }}
                        widthArr={widthArr}
                        textStyle={{ 
                            color: 'white', 
                            fontSize: 15, 
                            paddingLeft: 20,
                            fontFamily: 'SpaceGrotesk-Light',
                        }}
                    />
                ))}
                </>
               )}
               {/* {type === 'Card' && (
                <>
                <Row
                    data={tableHead2}
                    style={{
                        backgroundColor: '#1D1C1C',
                        height: 45,
                        justifyContent: 'center',
                    }}
                    widthArr={widthArr} 
                    textStyle={{ 
                        color: 'white', 
                        fontSize: 14, 
                        fontFamily: 'SpaceGrotesk-Bold',
                        paddingLeft: 20
                    }}
                />
                {name2.map((name, index) => (
                    <Row
                        key={index}
                        data={name}
                        style={{
                            backgroundColor: '#1D1C1C',
                            borderColor: '#292525',
                            borderWidth: 0.2,
                            borderRadius: 4,
                            height: 55,
                            justifyContent: 'center'
                        }}
                        widthArr={widthArr}
                        textStyle={{ 
                            color: 'white', 
                            fontSize: 15, 
                            paddingLeft: 20,
                            fontFamily: 'SpaceGrotesk-Light',
                        }}
                />
                ))}
                </>
               )} */}
            </Table>
        </View>
    );
};

const styles = {
    card: {
        backgroundColor: '#1D1C1C',
        width: '95%',
        borderRadius: 10,
        borderColor: '#D4C3C3',
        borderWidth: 0.3,
        marginBottom: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 30,
        paddingLeft: 20,
        fontFamily: 'SpaceGrotesk-Bold'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    name: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        width: '20%',
    },
};

export default VisitorsList;


