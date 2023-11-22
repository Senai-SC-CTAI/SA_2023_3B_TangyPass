import { StyleSheet, Text, View,Image, TextInput, Pressable,TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from "react";
import{ useRouter } from 'expo-router';
import { Link } from "expo-router";
import axios from "axios";
import Logo from "./Logo";
import { useNavigation } from '@react-navigation/native';

export default function Page() {



  const [Password,setPassword]  = useState('')
  const [email,setEmail] = useState('')
  const navigation = useNavigation();

  async function getEmail(){
    const email = await AsyncStorage.getItem("emailUser");
    if(email){
      navigation.navigate('Home_Pai');
    }
  }

  getEmail()

  async function armItem(email, id){
    try {
      await AsyncStorage.setItem('emailUser',email);
      await AsyncStorage.setItem('idUser',id);
      await AsyncStorage.setItem('typeUser',"responsavel");
      navigation.navigate('Home_Pai');
    } catch (e){
      console.log(e);
    }
  }
 

  const clicked = ()  =>{
    axios.post(`https://nbrasil.online/responsavel/login`, {user: email, password:Password})
    .then(e =>{
        if(e.data.status != "error"){
          armItem(email, e.data.id)
        } else {
          Alert.alert('Erro', 'Credenciais inválidas');
        }
    })
    .catch(error => {
      // Trate erros na solicitação
      console.error('Erro na solicitação:', error);
    });
      
        console.log(email, Password)
        console.log(AsyncStorage.getItem('useEmail'))
        console.log(AsyncStorage.getItem('usePassord'));
    
  }

 
 
  return (
    <View style={styles.container}>
    <Logo/>
        <View>
            <Text style={styles.tex}>Responsável</Text>
        </View>

        <TextInput 
        placeholder="Usuário" 
        style={styles.inp}
        onChange={e => setEmail(e.nativeEvent.text)}
        />
        <TextInput 
          placeholder="Insira sua senha" 
          style={styles.inp} 
          secureTextEntry={true}
          onChange={e => setPassword(e.nativeEvent.text)}
        />
   
        <TouchableOpacity style={styles.btn} onPress={clicked}>
                <Text style={styles.texPres}>ENTRAR</Text>
        </TouchableOpacity>

        <View style={styles.retangle}>
          <Image source={require('../Assets/Polygon2.png')}></Image>
        </View>

        <Link href="Recuperar_Senha" style={styles.ty}> Recuperar Senha</Link>
        <Link href="/" style={styles.ty}> Entrar como estudante</Link>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f1f1f1"
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
    padding:10,
    marginBottom: 20
  }, 
  inp:{
    color:'#9A9A9A', 
    fontSize:18,
    maxWidth:262,
    width:"100%",
    backgroundColor:'#fff',
    padding:15,
    margin:10,
    borderRadius:5,
    shadowColor:'#00000010',
    shadowOffset: {width: 5, height:5},
    shadowRadius:30,
    elevation:5,

  },
  btn:{
    backgroundColor:'#000',
    padding:5,
    marginTop: 20,
    maxWidth:262,
    width:"100%",
    borderRadius:5,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  texPres:{
    color:'#fff',
    textAlign:'center',
    padding:5,
  },
  ty:{
    fontSize:16,
    padding:10,
  },
  retangle:{

    left:"91%",
    right:0,
    bottom:0,
    position:"absolute",
    },
});