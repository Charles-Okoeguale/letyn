import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Container from "./Container/container";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { calculateEm, calculateFontsize } from "../utils/helpers";
import { useForm } from "../Context/FormContext";
import { handleEstateRegistration } from "../utils/handle_form";

const EstateSelectionModal = ({ 
    setModal, 
    estates, 
    navigation 
  }) => {
    const { estateRegister, setEstateRegister } = useForm();
    return (
      <SafeAreaView style={[styles.container, styles.modalContainer]}>
        <Container
          text={null}
          iconColor={'#000000'}
          iconSize={25}
          iconName={'close'}
          onClick={() => setModal(false)}
        />
        <View style={styles.modalContent}>
          <Text style={styles.text2}>Select an Estate</Text>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
          >
            {estates?.length > 0 ? (
              estates.map((estate) => (
                <TouchableOpacity
                  key={estate.place_id}
                  onPress = {async () => {
                      try {
                        await handleEstateRegistration(estate, estateRegister, setEstateRegister, setModal, navigation);
                      } catch (error) {
                        console.error('Error during estate registration:', error.message);
                      }
                  }}
                  style={styles.address}
                >
                  <Text style={styles.estateName}>{estate.name}</Text>
                  <Text style={styles.estateAddress}>{estate.address}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.noEstatesText}>Address not found.</Text>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    modalContainer: {
      alignItems: 'flex-end',
    },
    modalContent: {
      width: '100%',
      alignItems: 'center',
      flex: 1,
    },
    text2: {
      marginTop: calculateEm(32),
      marginBottom: calculateEm(32),
      fontFamily: 'Bold',
      fontSize: calculateFontsize(20)
    },
    scrollView: {
      width: '100%',
    },
    scrollViewContent: {
      paddingBottom: 20,
    },
    address: {
      width: '100%',
      height: calculateEm(100),
      justifyContent: 'center',
      gap: calculateEm(10),
      backgroundColor: '#E8E8E8',
      paddingLeft: calculateEm(20),
      marginBottom: calculateEm(5)
    },
    estateName: {
      fontFamily: 'SBold',
      fontSize: calculateEm(22)
    },
    estateAddress: {
      fontFamily: 'SLight'
    },
    noEstatesText: {
      fontFamily: 'Light',
      fontSize: calculateEm(16)
    },
  });

  export default EstateSelectionModal