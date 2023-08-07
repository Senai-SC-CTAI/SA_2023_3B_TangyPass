import { StyleSheet, Text, TouchableOpacity,View } from "react-native";
import { Alata_400Regular, useFonts } from '@expo-google-fonts/alata';
import { MaterialIcons } from '@expo/vector-icons';

import { Link } from "expo-router";
export default function Page() {
  let [fontsLoaded] = useFonts({
    Alata_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } 
  return (
    <View style={styles.container}>
  
    <Text style={styles.title}>Tangy</Text>
    <Text style={styles.usertitle}>Logado como{"\n"}        Aluno</Text>
   
<View style={styles.tudo}>
   <View style={styles.btns2}>
    <TouchableOpacity style={styles.Qrbtn}>
      <Text style={styles.escaneartxt}>Escanear</Text>
      <MaterialIcons  name="qr-code-2" size={61} color="white" />
     </TouchableOpacity>
     </View>

    <View style={styles.btns}>  
     <TouchableOpacity style={styles.rqs}>
      <Text >Requisitar Saída</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.cronogramabtn}>
      <Text style={styles.cronogramatxt}>Cronograma</Text>
     </TouchableOpacity>

     </View>
     </View>
     <TouchableOpacity style={styles.entrada_saida_hs}>
      <Text style={styles.hstxt}>Historico de entradas de saídas</Text>
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
  width:"170%",
  height:"130%",
  
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
  width:"120%",
  height:"190%",
  marginBottom:15,
 },
 rqstxt:{
  color:"white",
  fontFamily:"Alata_400Regular",
  fontSize:18,
 },
 btns:{
  width:"50%",
  height:"30%",
  marginLeft:20,
  
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
  width:"120%",
  height:"190%",
 },
 cronogramatxt:{
  color:"white",
  fontFamily:"Alata_400Regular",
  fontSize:18,
 },
 btns2:{
 width:"fit-content",
 marginRight:50,
 },
tudo:{
  flexDirection:"row",
  marginTop:90,
  marginRight:20,
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