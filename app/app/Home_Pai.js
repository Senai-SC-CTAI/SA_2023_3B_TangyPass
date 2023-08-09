import { Alata_400Regular, useFonts } from '@expo-google-fonts/alata';
import { Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Page() {
  let [fontsLoaded] = useFonts({
    Alata_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
     <Text style={styles.title}>Tangy</Text>
     <Text style={styles.usertitle}>Logado como{"\n"} Responsável</Text>
     
     <View style={styles.buttons}>
      
     <TouchableOpacity style={styles.agendarbtn}>
     <Link href="Home_Estudante">
      <Text style={styles.agendartxt}>Agendar{"\n"}   Saída</Text>
      </Link>
     </TouchableOpacity>
     
     
        <TouchableOpacity style={styles.pedidosbtn1}>
          <Text style={styles.pedidostxt}>Pedidos de {"\n"}     Saída</Text>
        </TouchableOpacity>
      </View>

      
        <TouchableOpacity style={styles.cronogramabtn}>
          <Text style={styles.cronotxt}>Crônograma do estudante</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.hitorico_entrada_saidabtn}>
          <Text style={styles.hitoricotxt}>Historico de entradas e saídas</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.saidabtn}>
          <Text style={styles.saidatxt}>Sair</Text>
        </TouchableOpacity>

        <Text style={styles.tangy}>Tangy.app @2023</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
 title:{
  fontFamily:"Alata_400Regular",
  fontSize:36,
  paddingTop:71
 },
 usertitle:{
  fontFamily:"Alata_400Regular",
  paddingTop:71,
  fontSize:18,
 },
 buttons:{
  flexDirection:"row",
  width:"100%",
  height:30,
  marginBottom:50,
  marginTop:40,
 },
 agendarbtn:{
  backgroundColor:'black',
  borderRadius:5,
  width:"40%",
  height:"230%",
  justifyContent:'center',
  alignItems:'center',
  position:'relative',
  marginRight:15,
  marginLeft:30,
  shadowColor:'#000010',
  shadowOffset:{width:5, height:5},
  shadowRadius:1,
  borderRadius:5,
  shadowOpacity:0.5,
  marginBottom:0,
  
 },
 agendartxt:{
  color:'white',
  fontFamily:'Alata_400Regular',
  fontSize:18,
 },
 pedidosbtn1:{
  backgroundColor:'black',
  width:"40%",
  height:"230%",
  justifyContent:'center',
  alignItems:'center',
  shadowColor:'#000010',
  shadowOffset:{width:5, height:5},
  shadowRadius:1,
  borderRadius:5,
  shadowOpacity:0.5,

 },
 pedidostxt:{
  color:'white',
  fontFamily:'Alata_400Regular',
  fontSize:18,
  marginLeft:8,
 },
 cronogramabtn:{
  backgroundColor:'black',
  justifyContent:'center',
  alignItems:'center',
  shadowColor:'#000010',
  shadowOffset:{width:5, height:5},
  shadowRadius:1,
  borderRadius:5,
  shadowOpacity:0.5,
  width:"84%",
  height:"7%",
  
 },
 cronotxt:{
  color:"white",
  fontFamily:'Alata_400Regular',
  fontSize:18,
 },
 hitorico_entrada_saidabtn:{
  backgroundColor:'black',
  justifyContent:'center',
  alignItems:'center',
  shadowColor:'#000010',
  shadowOffset:{width:5, height:5},
  shadowRadius:1,
  borderRadius:5,
  shadowOpacity:0.5,
  width:"84%",
  height:"7%",
  marginTop:10,
 },
 hitoricotxt:{
  color:"white",
  fontFamily:'Alata_400Regular',
  fontSize:18,
 },
 saidatxt:{
  color:"black",
  fontFamily:'Alata_400Regular',
  fontSize:18,
 },
saidabtn:{
  width:"10%",
  height:"10%",
  marginTop:100,
},
tangy:{
  color:"#B6B6B6",
  fontFamily:'Alata_400Regular',
  fontSize:15,
}

});