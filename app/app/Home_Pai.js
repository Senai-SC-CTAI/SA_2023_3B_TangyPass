import { Alata_400Regular, useFonts } from '@expo-google-fonts/alata';
import { Link } from "expo-router";
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "./Logo"
export default function Page() {
  let [fontsLoaded] = useFonts({
    Alata_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
       <Logo/>

      <Text style={styles.usertitle}>Logado Como</Text>
      <View style={styles.botoes}>
        <View style={styles.ostres}>

          <TouchableOpacity style={styles.qr}>
            <Text style={styles.qrtxt}>Escanear</Text>
          </TouchableOpacity>

          <View style={styles.osdois}>

            <TouchableOpacity style={styles.rqs}>
              <Text style={styles.rqstxt}> Requisitar saída</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rqs}>
              <Text style={styles.cronotxt}> Crônograma</Text>
            </TouchableOpacity>

          </View>
        </View>
        <Link href="Historico_Responsavel">
        <TouchableOpacity style={styles.hs}>
          <Text style={styles.hstxt}>Historico de entrada e saida</Text>
        </TouchableOpacity>
        </Link>
      </View>
      <Link href="/">
        <TouchableOpacity style={styles.saidabtn}>
          <Text style={styles.saidatxt}>Sair</Text>
        </TouchableOpacity>
      </Link>
      <Text style={styles.tangy}>Tangy.app @2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  botoes:{
    width:"calc(100% - 10px)",
    marginTop:70,
    marginBottom:70,
    display:"flex",
    maxWidth:"320px",
    flexDirection:"column",
    gap:15,
  },
  logo:{
    width:110,
    height:100,
    display:'flex',
    marginTop:15,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column', 
  },
  usertitle:{
    fontFamily:"Alata_400Regular",
    fontSize:18,
    marginTop:40
  },
  hs:{
    backgroundColor:"black",
    width:"100%",
    height:"calc(70px  - 15px)",
    borderRadius:5
    
  },
  ostres:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    gap:15
  },
  qr:{
    width:"40%",
    aspectRatio:1,
    backgroundColor:"black",
    borderRadius:5
  },

  osdois:{
    width: "calc(60% - 15px)",
    height:"calc(100% - 15px)",
    display:"flex",
    flexDirection:"column",
    gap:15
  },
  rqs:{
    width:"100%",
    height:"calc(70px - 15px)",
    backgroundColor:"black",
    borderRadius:5,
  },
  qrtxt:{

  },
  fontFamily:"Alata_Regular",
  fontSize:18,
  color:"white"

});