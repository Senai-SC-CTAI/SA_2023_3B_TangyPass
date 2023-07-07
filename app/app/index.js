import { StyleSheet, Text, View,Image, Pressable, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.alingText}> Estudante</Text>
        <Text style={styles.tex}> Entre com sua conta google para continuar</Text>
        <TouchableOpacity style={styles.btn} >
        <Image source={require('../Components/Assets/google.png')} style={styles.img}></Image> <Text style={styles.tex}>Prosseguir com google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor:'#FDFDFD'
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
  },
  btn:{
    margin:10,
    padding:10,
    width:339,
    height:39,
    backgroundColor:'red'
  },
  img:{
    top:30
  }
  
});
