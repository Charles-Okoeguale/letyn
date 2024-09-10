import { StyleSheet, TouchableOpacity } from "react-native";
import { Path, Svg } from "react-native-svg";

export const BackButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.backButton}>
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M19 12H5M12 19l-7-7 7-7" />
      </Svg>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    backButton: {
      marginLeft: 10,
    },
  });