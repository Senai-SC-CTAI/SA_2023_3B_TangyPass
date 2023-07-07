import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text> Estudante</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  alingText:{
    display:'flex',
    justifyContent:'center',
    margin:5,
    marginBottom:700,
    position:'absolute',
    textAlign:'center',
  },
});
