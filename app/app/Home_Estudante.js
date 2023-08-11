import { StyleSheet, Text, TouchableOpacity,View,Image } from "react-native";
import { Alata_400Regular, useFonts } from '@expo-google-fonts/alata';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from "expo-router";
import React from 'react';

export default function Page() {
  let [fontsLoaded] = useFonts({
    Alata_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } 
  return (
    <View style={styles.container}>
     <Image source={require('../Assets/img.png')} style={styles.logo}/>

<Text style={styles.usertitle}>Logado Como</Text>
<View style={styles.botoes}>
  <View style={styles.ostres}>
    <Link href="Escanear" style={styles.qr}>
    <TouchableOpacity style={styles.qr}>
      <Text style={styles.qrtxt}>Escanear</Text>
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
  <Link href="Historico_Estudante">
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
    padding: 24,
  },
 foi:{
  fontFamily:"Alata_400Regular",
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
 Qrbtn:{
  backgroundColor:'black',
  borderRadius:5,
  justifyContent:'center',
  alignItems:'center',
  shadowColor:'#000010',
  shadowOffset:{width:5, height:5},
  shadowRadius:1,
  borderRadius:5,
  shadowOpacity:0.5,
  maxWidth:124,
  width:"100%",
  paddingRight:22,
  paddingLeft:22,
  paddingBottom:22,
  paddingTop:19,


 },
 escaneartxt:{
  color:"white",
  fontFamily:"Alata_400Regular",
  fontSize:18,
  marginBottom:10,
 },
 rqs:{
  backgroundColor:'black',
  borderRadius:5,
  justifyContent:'center',
  alignItems:'center',
  shadowColor:'#000010',
  shadowOffset:{width:5, height:5},
  shadowRadius:1,
  borderRadius:5,
  shadowOpacity:0.5,
  maxWidth:262,
  width:"100%",
  marginBottom:15,
  padding:30,
  paddingRight:40,
 },
 rqstxt:{
  color:"white",
  fontFamily:"Alata_400Regular",
  fontSize:18,
 },
 btns:{
  width:"50%",
  height:"30%",
  
  
 },
 cronogramabtn:{
  backgroundColor:'black',
  borderRadius:5,
  justifyContent:'center',
  alignItems:'center',
  shadowColor:'#000010',
  shadowOffset:{width:5, height:5},
  shadowRadius:1,
  borderRadius:5,
  shadowOpacity:0.5,
  maxWidth:262,
  width:"100%",
  padding:10,
 },
 cronogramatxt:{
  color:"white",
  fontFamily:"Alata_400Regular",
  fontSize:18,
 },
 btns2:{
 
 marginRight:10,
 },
tudo:{
  flexDirection:"row",
  marginTop:90,
  marginRight:30,
},
entrada_saida_hs:{
  backgroundColor:'black',
  borderRadius:5,
  justifyContent:'center',
  alignItems:'center',
  shadowColor:'#000010',
  shadowOffset:{width:5, height:5},
  shadowRadius:1,
  borderRadius:5,
  shadowOpacity:0.5,
  width:"89%",
  height:"7%",
  marginTop:45,
  marginLeft:13,
},
hstxt:{
  color:"white",
  fontFamily:"Alata_400Regular",
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