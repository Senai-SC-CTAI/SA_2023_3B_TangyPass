import { StyleSheet, Text, View,Image, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";
export default function Page() {
  return (
    <View style={styles.container}>
     <Image source={require('./Assets/img.png')} style={styles.logo}/>
        <View>
            <Text style={styles.tex}>Responsável</Text>
        </View>

        <TextInput placeholder="Usúario" style={styles.inp}/>
        <TextInput placeholder="Insira sua senha" style={styles.inp} secureTextEntry={true}/>

        <Pressable>
            <View style={styles.btn} >
                <Text style={styles.texPres}>ENTRAR</Text>
            </View>
        </Pressable>
        <Link href="/" style={styles.ty}>Entrar como estudante</Link>

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
  }, 
  inp:{
    color:'#9A9A9A', 
    fontSize:18,
    width: 339,
    height: 58, 
    backgroundColor:'#fff',
    padding:10,
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
    width:339,
    height:53,
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
  },
  retangle:{
    width: 100,
    height: 369.922,
    backgroundColor:'#000',
    transform: [{rotate: '50deg'}],
    top:100,
    marginLeft:220,
    },
});