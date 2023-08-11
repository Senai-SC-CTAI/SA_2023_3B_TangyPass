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

    <View style={styles.osdois1}>
    <Link href="agendar" style={styles.agnd} >
    <TouchableOpacity>
      <Text style={styles.agndtxt}>Agendar{"\n"}Saida</Text>
    </TouchableOpacity>
    </Link>

    <Link href="pedidos"style={styles.agnd}>
    <TouchableOpacity>
      <Text style={styles.agndtxt}>Pedidos de{"\n"} saida</Text>
    </TouchableOpacity>
    </Link>

    <View style={styles.osdois2}>
  
  <Link href="Cronograma_Responsavel" style={styles.hs}>
    <TouchableOpacity>
      <Text style={styles.hstxt}>Cronograma do estudante</Text>
    </TouchableOpacity>
  </Link>

    <Link href="Historico_Responsavel" style={styles.hs}>
    <TouchableOpacity >
      <Text style={styles.hstxt}>Historico de entradas e saidas</Text>
    </TouchableOpacity>
    </Link>

    </View>

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
 botoes:{
  width:"calc(100% - 10px)",
  height:250,
    marginTop:70,
    marginBottom:70,
    display:"flex",
    maxWidth:"320px",
    flexDirection:"column",
    gap:15,
 },
 usertitle:{
  fontFamily:"Alata_400Regular",
  fontSize:18,
  marginTop:40
},
osdois1:{
width:"100%",
height:"50%",
flexDirection:"row",
gap:15,
flexWrap:"wrap",
marginBottom:15,
},
osdois2:{
height:"100%",
width:"100%",
display:"flex",
justifyContent:"center",
alignItems:"center",
textAlign:"center",
gap:10,
},
agnd:{
width:"47.5%",
height:"90%",
backgroundColor:"black",
borderRadius:5,
textAlign:"center",
justifyContent:"center",
},
hs:{
width:"100%",
height:"80%",
backgroundColor:"black",
borderRadius:5,
textAlign:"center",


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
agndtxt:{
  fontFamily:"Alata_400Regular",
  fontSize:18,
  color:"white",
  marginTop:30,
},
hstxt:{
  fontFamily:"Alata_400Regular",
  fontSize:18,
  color:"white",
  marginTop:13
},
});