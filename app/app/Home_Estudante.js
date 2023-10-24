import { StyleSheet, Text, TouchableOpacity,View,Image } from "react-native";
import { Alata_400Regular, useFonts } from '@expo-google-fonts/alata';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from "expo-router";
import React from 'react';

export default function Page() {
  // let [fontsLoaded] = useFonts({
  //   Alata_400Regular,
  // });

  // if (!fontsLoaded) {
  //   return null;
  // } 
  return (
    <View style={styles.container}>
      <Image source={require('../Assets/img.png')} style={styles.logo}/>

      <Text style={styles.usertitle}>Logado Como</Text>
      <View style={styles.botoeees}>
        <View style={styles.ostres}>
          <Link href="Escanear" style={styles.qr}>
          <TouchableOpacity style={styles.kjnn}>
            <Text style={styles.qrtxt}>Escanear</Text>
            <MaterialIcons name="qr-code-2" size={67} color="white" style={styles.qrimg} />
          </TouchableOpacity>
          </Link>
          <View style={styles.osdois}>
            <Link href="requisitar">
            <TouchableOpacity style={styles.rqs}>
              <Text style={styles.rqstxt}> Requisitar saída</Text>
            </TouchableOpacity>
            </Link>
            <Link href="Cronograma_Estudante">
            <TouchableOpacity style={styles.rqs}>
              <Text style={styles.cronotxt}> Crônograma</Text>
            </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
        <Link href="Historico_Estudante">
          <TouchableOpacity style={styles.hs}> 
            <Text style={styles.hstxt}>Historico de entrada e saida</Text>
          </TouchableOpacity>
        </Link>
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
    padding: 24,
  },
  botoeees:{
    width:320,
    marginTop:70,
    marginBottom:70,
    display:"flex",
    flexDirection:"column",
    gap:15,
  },
  usertitle:{
    fontFamily:"Alata_400Regular",
    fontSize:18,
    marginTop:40
  },
  hs:{
    backgroundColor:"black",
    width:"100%",
    height:55,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
  },
  ostres:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    gap:15
  },
  qr:{
    aspectRatio:1,
    backgroundColor:"black",
    borderRadius:5
  },

  osdois:{
    width: 300,
    height:305,
    display:"flex",
    flexDirection:"column",
    gap:15
  },
  rqs:{
    width:"100%",
    height:55,
    backgroundColor:"black",
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    paddingBottom:3
  },
  qrtxt:{
    fontFamily:"Alata_400Regular",
    color:"white",
    fontSize:18,
    marginLeft:25,
  },
  rqstxt:{
    fontFamily:"Alata_400Regular",
    fontSize:18,
    color:"white",
  },
  cronotxt:{
    fontFamily:"Alata_400Regular",
    fontSize:18,
    color:"white",
  },
  hstxt:{
    fontFamily:"Alata_400Regular",
    fontSize:18,
    color:"white",
  },
  saidatxt:{
    fontFamily:"Alata_400Regular",
    fontSize:18,
    color:"black",
  },
  saidabtn:{
    marginTop:50,
  },
  tangy:{
    fontFamily:"Alata_400Regular",
    fontSize:18,
    color:"#B6B6B6",
    marginTop:50,
  },
  
});