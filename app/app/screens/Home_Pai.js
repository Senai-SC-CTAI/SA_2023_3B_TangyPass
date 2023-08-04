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
      <Text style={styles.agendartxt}>Agendar{"\n"}   Saída</Text>
     </TouchableOpacity>

     
      <Link href="Historico_Responsavel">
        <TouchableOpacity style={styles.pedidosbtn1}>
          <Text style={styles.pedidostxt}>Pedidos de {"\n"}     Saída</Text>
        </TouchableOpacity>
      </Link>
      </View>

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
  marginTop:40,
 },
 agendarbtn:{
  backgroundColor:'black',
  borderRadius:5,
  width:"40%",
  height:98.61,
  justifyContent:'center',
  alignItems:'center',
  position:'relative',
  marginRight:15,
  marginLeft:30,
  
 },
 agendartxt:{
  color:'white',
  fontFamily:'Alata_400Regular',
  fontSize:18,
 },
 pedidosbtn1:{
  backgroundColor:'black',
  width:159,
  height:99,
  justifyContent:'center',
  alignItems:'center',
  shadowColor:'#000010',
  shadowOffset:{width:5, height:5},
  shadowRadius:1,
  borderRadius:5,
 },
 pedidostxt:{
  color:'white',
  fontFamily:'Alata_400Regular',
  fontSize:18,
  marginLeft:8,
 },

});