import { StyleSheet, Text, View,Image, Pressable, TouchableOpacity } from "react-native";
import { useFonts, Alata_400Regular } from '@expo-google-fonts/alata';
import { Link } from "expo-router";
import Logo from "./Logo";

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
      <View style={styles.main}>
        <Text style={styles.alingText}> Estudante</Text>
        <Text style={styles.tex}> Entre com sua conta google para continuar.</Text>
        
        <TouchableOpacity onPress={()=> "Home_Estudante"} style={styles.alingbtn} >
          <View style={styles.btn} >
            <Image source={require('../Assets/google.png')} style={styles.img}/>
            <Link href="Home_Estudante" style={styles.texbtn}> Prosseguir com google</Link>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={styles.aling}>
             <Link href="Login_Responsavel" style={styles.ty}>Entrar como responsável</Link>
            </View>
        </TouchableOpacity>
  
      </View>

      <View style={styles.retangle}>
          <Image source={require('../Assets/Polygon2.png')}></Image>
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
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    fontSize:25,
    textAlign:'center',
    color:'#5D5D5D',
    margin:37,
    fontFamily:"Alata_400Regular",
  },
  tex:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    textAlign:'center',
    color:'#9A9A9A',
    fontSize:18,
    fontFamily:"Alata_400Regular",
  },
  btn:{
    maxWidth:262,
    width:"100%",
    backgroundColor:'#fff',
    padding:10,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: '#000010',
    shadowOpacity: 0.1,
    shadowRadius:40,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    margin:10,
  },
  alingbtn:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    padding:22,
  },

  texbtn:{
    padding:10,
    fontFamily:"Alata_400Regular",
  },

  aling:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  },

  logo:{
    width:110,
    height:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  },

  retangle:{
    left:"91%",
    right:0,
    bottom:0,
    position:"absolute",
  },
  ty:{
    fontFamily:"Alata_400Regular",
  }
});
