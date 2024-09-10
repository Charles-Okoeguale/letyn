import { StyleSheet, View, SafeAreaView, ScrollView, Text } from 'react-native';
import ProfileCard from '../../components/Cards/profileCard';
import ImageWithTwoText from '../../components/Container/imageWithText';
import { calculateEm, capitalizeFirstLetter } from '../../utils/helpers';
import { useEffect, useState } from 'react';
import { getDetailsFromSecureStore } from '../../utils/handle_storage';

const list = [ 
    {name: "Residences", icon: 'building'},
    {name: "Records", icon: 'book'},
    {name: "Subscription Plan", icon: 'credit-card-alt'},
    {name: "Settings", icon: 'cog'},
    {name: "Logout", icon: 'sign-out'},
]

const MainProfileScreen = ({navigation}) => {
    const [details, setDetails] = useState()

    const handleProfileClick = (name, index) => {
        if (index < 4) {
            navigation.navigate(`${name}`)
        } else  {}
    }

    const getEstateDetails = async () => {
        await getDetailsFromSecureStore('letyn_token', setDetails);
    }

    useEffect(() => {
     getEstateDetails()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ width: '100%', flex: 1, alignItems: 'center'}}>
                <ImageWithTwoText
                    imageUrl="https://example.com/image.jpg"
                    text1={capitalizeFirstLetter(details?.estateName)}
                    text2={`${details?.city}, ${details?.state}, ${details?.country}`}
                />
                <View style={{
                    width: '100%',
                    flex: 1,
                    borderRadius: calculateEm(20),
                    paddingTop: calculateEm(10),
                    paddingHorizontal: calculateEm(5),
                    gap: calculateEm(10),
                    alignItems: 'center'
                }}>
                    {list.map((item, index) => (
                        <ProfileCard name={item.name} iconName={item.icon} key={index} handlePress={() => handleProfileClick(item.name, index)}/>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MainProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      gap: 20,
    },

});