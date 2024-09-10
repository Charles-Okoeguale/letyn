import React from 'react';
import { View } from 'react-native';
import Textfield from './textfield';

const CustomComponent = () => {
    return (
        <View style={styles.body}>
             <Textfield
                containerStyle={[styles.containerStyle]}
                textColor={'#FFFFFF'}
                placeholderTextColor={'#FFFFFF'}
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                secureTextEntry={false}
                placeholder={'Residents name'}
            />
            <Textfield
                containerStyle={[styles.containerStyle]}
                textColor={'#FFFFFF'}
                placeholderTextColor={'#FFFFFF'}
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder={'Phone number'}
            />
        </View>
    );
};


const styles = {
      containerStyle: {
          borderRadius: 10,
          height: 50,
          backgroundColor: '#1D1C1C',
          alignSelf: 'center',
          width: 200
      },
  
      containerStyle2: {
          width: 60,
          borderRadius: 10,
          height: 50,
          backgroundColor: '#000000',
          alignSelf: 'center',
          borderColor: '#292525',
          borderWidth: 1,
      },
      body: {
          width: '99%',
          gap: 3,
          height: 70,
          backgroundColor: '#000000',
          borderColor: '#292525',
          flexDirection: 'row',
          borderWidth: 1,
          justifyContent: 'center'
      },
      inputContainerStyle: {
          borderBottomColor: null,
          borderBottomWidth: 0,
          paddingTop: 2,
          fontSize: 14,
      },
      inputStyle: {
          color: 'white',
          fontFamily: 'Light',
          textAlign: 'center'
      },
};

export default CustomComponent;
