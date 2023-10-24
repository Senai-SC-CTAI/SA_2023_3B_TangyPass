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
          <Link href="/Escanear">
          <TouchableOpacity style={styles.qr}>
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
        <View style={styles.asdasd}>

          <Link href="Historico_Estudante">
            <TouchableOpacity style={styles.hs}> 
              <Text style={styles.hstxt}>Historico de entrada e saida</Text>
            </TouchableOpacity>
          </Link>
        </View>
      
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
    padding: 24,
  },
  botoeees:{
    width:"80%",
    marginTop:70,
    marginBottom:70,
    display:"flex",
    flexDirection:"column",
    gap:15,
    justifyContent: "center",
    alignItems: "center",
  },
  usertitle:{
    fontFamily:"Alata_400Regular",
    fontSize:18,
    marginTop:40
  },
  asdasd: {
    display: "flex",
    // backgroundColor: "red",
    marginLeft: -35,
  },
  hs:{
    backgroundColor:"black",
    width: 350,
    height:55,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    marginLeft: -10,

  },
  ostres:{
    display:"flex",
    flexDirection:"row",
    gap:15
  },
  qr:{
    height:130,
    width: 130,
    backgroundColor:"black",
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center"
  },

  osdois:{
    height:"100%",
    display:"flex",
    flexDirection:"column",
    gap:15
  },
  rqs:{
    width: 200,
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
   marginBottom:10,
  },
  rqstxt:{
    fontFamily:"Alata_400Regular",
    fontSize:18,
    color:"white",
    // height:2424
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