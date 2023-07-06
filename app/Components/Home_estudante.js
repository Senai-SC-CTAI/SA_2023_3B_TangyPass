import { StyleSheet, Text, View, TouchableOpacity } from 'react';
import { Link } from "expo-router";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela A</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  
});