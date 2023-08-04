import { StyleSheet, Text, View,Image, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";
export default function Page() {
  return (
    <View style={styles.container}>
     <Image source={require('../Assets/img.png')} style={styles.logo}/>
        <View>
            <Text style={styles.tex}>Recuperar</Text>
        </View>

        <TextInput placeholder="Email" style={styles.inp} autoComplete="email"/>

        <Pressable style={styles.btn} >
            <View >
                <Text style={styles.texPres}>Solicitar nova senha</Text>
            </View>
        </Pressable>
        <Link href="Login_Responsavel" style={styles.ty}>Entrar como responsável</Link>

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
  },
  logo:{
    width:110,
    height:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  },
  tex:{
    fontSize:25,
    marginTop:120,
    padding:10,
    width:""
  }, 
  inp:{
    color:'#9A9A9A', 
    fontSize:18,
    maxWidth:262,
    width:"100%",
    backgroundColor:'#fff',
    padding:15,
    margin:20,
    borderRadius:5,
    shadowColor:'#00000010',
    shadowOffset: {width: 5, height:5},
    shadowRadius:30,
    elevation:5,
  },
  btn:{
    backgroundColor:'#000',
    padding:10,
    maxWidth:262,
    width:"100%",
    borderRadius:5,
  },
  texPres:{
    color:'#fff',
    textAlign:'center',
    padding:5,
  },
  ty:{
    top:10,
    fontSize:16,
    padding:10,
  },
  retangle:{
    transform: [{"translateY":"10%"}, {"translateX":"10%"}],
    right:0,
    bottom:0,
    position:'fixed'
    },
});
