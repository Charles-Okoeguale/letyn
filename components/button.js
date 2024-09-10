import { Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { SolidSvg } from './SVGs/arrow';
import { FontAwesome } from '@expo/vector-icons'; 

const CustomButton = (
    { 
        text, 
        buttonStyle, 
        onClick, 
        icon,
        textStyle,
        iconColor,
        loading,
        iconSize,
        containerStyle

    }) => {
    return (
        <View style={containerStyle}>
            <Button onPress={onClick} buttonStyle={[buttonStyle, { gap: 5 }]}>
                {loading ? <FontAwesome name={'spinner'} style={{ color: iconColor, fontSize: iconSize }} /> : 
                    (
                        <>
                            {text && <Text style={textStyle}>{text}</Text>}
                            {icon && (
                                <SolidSvg
                                    color={iconColor}
                                    height={iconSize}
                                    width={iconSize}
                                />
                            )}
                        </>
                    )
                }
            </Button>
        </View>
    
    );
};


export default CustomButton;