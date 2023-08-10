import { StyleSheet, Text, TouchableOpacity,View } from "react-native";
import { Alata_400Regular, useFonts } from '@expo-google-fonts/alata';
import { MaterialIcons } from '@expo/vector-icons';

import { Link } from "expo-router";
export default function Page() {
  let [fontsLoaded] = useFonts({
    Alata_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } 
  return (
    <View style={styles.container}>
      
    
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
 
});