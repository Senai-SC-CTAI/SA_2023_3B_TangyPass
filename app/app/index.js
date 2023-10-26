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
 

  const clicked = () =>{
    axios.post(`https://nbrasil.online/aluno/login`, {user: email, password:Password})

    .then(e =>{
        if(clicked){ //login não esta autenticando ainda, mas a parentemente os dados ja estão sendo salvos
            // e necessario setar algum valor aqui dentro para pegar o user e o passeword da api, mas não descobri aqual seria ainda.  
          AsyncStorage.setItem('useEmail',JSON.stringify(email))
          AsyncStorage.setItem('usePassord',JSON.stringify(Password))
          navigation.navigate('Home_Estudante');
        } else{
          Alert.alert('Erro', 'Credenciais inválidas');
        }


      console.log(e.data)
      
    })
    .catch(error => {
      // Trate erros na solicitação
      console.error('Erro na solicitação:', error);
    });
      
        console.log(email, Password)
        console.log(AsyncStorage.setItem('useEmail',JSON.stringify(email)))
        console.log( AsyncStorage.setItem('usePassord',JSON.stringify(Password)));
    
  }

 
 
  return (
    <View style={styles.container}>
    <Logo/>
        <View>
            <Text style={styles.tex}>login</Text>
        </View>

        <TextInput 
        placeholder="Usúario" 
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
    marginTop:90,
    padding:10,
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
    padding:5,
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