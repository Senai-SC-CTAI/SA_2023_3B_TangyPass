import { StyleSheet, Text, View,Image, Pressable, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.alingText}> Estudante</Text>
        <Text style={styles.tex}> Entre com sua conta google para continuar</Text>
        <Pressable style={styles.btn}>
          <View>
            <Image source={require('../Components/Assets/google.png')} style={styles.img}/><Text style={styles.texPres}>Prosseguir com o google</Text>
          </View>
        </Pressable>
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
  
    fontSize:18,
    color:'#9A9A9A',
    fontWeight:'bold',
    textAlign:'center'
  },
  texPres:{
    fontSize:18,
    color:'#9A9A9A',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:-30,
    
  
  },
  btn:{
    width:387,
    height:39,
    padding:5,
    margin:5,
    backgroundColor:'red',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  
  },
  img:{
    bottom:4,
    right:50
  }
  
});
