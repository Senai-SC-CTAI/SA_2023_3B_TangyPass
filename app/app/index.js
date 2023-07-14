import { StyleSheet, Text, View,Image, Pressable, TouchableOpacity } from "react-native";
import { useFonts, Alata_400Regular } from '@expo-google-fonts/alata';
import { Link } from "expo-router";

export default function Page() {  
  return (
    <View style={styles.container}>
      <Image source={require('./Assets/img.png')} style={styles.logo}/>
      <View style={styles.main}>
        <Text style={styles.alingText}> Estudante</Text>
        <Text style={styles.tex}> Entre com sua conta google para continuar.</Text>
        <Pressable  onPress={()=> "Home_Estudante"}>
          <View style={styles.btn} >
            <Image source={require('../app/Assets/google.png')} style={styles.img}/>
            <Link href="Home_Estudante" style={styles.texbtn}> Prosseguir com google</Link>
          </View>
        </Pressable>
        <Link href="Home_Pai"> Home </Link>
        <Pressable>
            <View style={styles.aling}>
             <Link href="Login_Responsavel" style={styles.ty}>Entrar como responsável</Link>
            </View>
        </Pressable>
  
      </View>

      <View style={styles.retangle}>

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
    fontSize:25,
    textAlign:'center',
    marginTop:288,
  },
  tex:{
    fontSize:18,
    color:'#9A9A9A',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:30,
  },
  texPres:{
    fontSize:18,
    color:'#000',
  },

  btn:{
    width:339,
    height:39,
    padding:28,
    margin:22,
    borderRadius:5,
    marginTop:20,
    backgroundColor:'#ffffff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    shadowColor:'#00000010',
    shadowOffset: {width: 5, height:5},
    shadowRadius:30,
    elevation:5,
  },
  img:{
    right:30,
  },
  aling:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },

alingTex:{
  fontSize:16,
  color:'#000000',
  fontFamily:'Alata',
  textAlign:'center'
},

retangle:{
width: 100,
height: 369.922,
backgroundColor:'#000',
transform: [{rotate: '50deg'}],
top:202,
marginLeft:220,
},
  logo:{
    width:110,
    height:100,
    marginTop:10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  ty:{
    fontSize:16,
  }
});
