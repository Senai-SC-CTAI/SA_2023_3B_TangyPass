import { StyleSheet, Text, View,Image } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.alingText}> Estudante</Text>
        <Text style={styles.tex}> Entre com sua conta googlr para continuar</Text>
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
    color:'#5D5D5D',
    fontWeight:'bold',
    fontFamily:'Alata',
    fontSize:25,
    textAlign:'center'
  },
  tex:{
    margin:5,
    fontSize:18,
    color:'#9A9A9A',
    fontWeight:'bold',
    textAlign:'center'
  }
});
