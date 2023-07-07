import { StyleSheet, Text, View,Image, Pressable, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.alingText}> Estudante</Text>
        <Text style={styles.tex}> Entre com sua conta google para continuar.</Text>
        <Pressable >
          <View style={styles.btn} >
            <Image source={require('../Components/Assets/google.png')} style={styles.img}/>
            <Text style={styles.texPres}>Prosseguir com o google</Text>
          </View>
        </Pressable>
        
        <Pressable>
            <View style={styles.aling}>
             <Link href={'../Components/loginResponsavel'}>   <Text style={styles.alingTex}>Entrar como responsável</Text></Link>
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
    fontFamily:'Alata',
    fontSize:25,
    textAlign:'center',
    marginTop:280,
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
    color:'#9A9A9A',
    textAlign:'center',
  },
  btn:{
    width:339,
    height:39,
    padding:28,
    margin:22,
    top:10,
    borderRadius:5,
    marginTop:20,
    backgroundColor:'#FFFFFF',
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
  top:10,
},

retangle:{
width: 100,
height: 369.922,
backgroundColor:'#000',
transform: [{rotate: '50deg'}],
marginTop:200,
marginLeft:270,
},
  
});
