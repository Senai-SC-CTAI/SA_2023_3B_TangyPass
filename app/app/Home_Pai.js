import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import React from 'react';
import { useFonts, Alata_400Regular } from '@expo-google-fonts/alata';
import { StatusBar } from 'expo-status-bar';
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
     
     <TouchableOpacity style={styles.agendarbtn}>
      <Text style={styles.agendartxt}>Agendar{"\n"}   Saída</Text>
     </TouchableOpacity>
     
     <TouchableOpacity style={styles.pedidosbtn}>
      <Text style={styles.pedidostxt}>Pedidos de {"\n"}     Saída</Text>
     </TouchableOpacity>
     
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
 agendarbtn:{
  backgroundColor:'black',
  borderRadius:5,
  width:162,
  height:98.61,
  justifyContent:'center',
  alignItems:'center',
  position:'relative',
  top:100,
  right:90,
 },
 agendartxt:{
  color:'white',
  fontFamily:'Alata_400Regular',
  fontSize:18,
 },
 pedidosbtn:{
  backgroundColor:'black',
  borderRadius:5,
  width:159,
  height:99,
  justifyContent:'center',
  alignItems:'center',
  position:'relative',
  top:1.3,
  left:93,
 },
 pedidostxt:{
  color:'white',
  fontFamily:'Alata_400Regular',
  fontSize:18,
  marginLeft:8,
 },

});