import { Button, Modal, StyleSheet, Text, View,Image, Alert } from 'react-native';
import { useState,useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import { Link } from 'expo-router';
import{ useRouter } from 'expo-router';
import qr from '../Assets/qrcode.png'

export default function App() {
  const [permissao,setPermissao] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text,setText] = useState('')


  const router = useRouter()

  const Camerapermission = () =>{
    (async () =>{
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setPermissao(status === 'granted')
    })()
  }

  useEffect(() => {
    Camerapermission();
  }, []);

  const tratementScannedBar = ({type,data}) =>{
      if(!scanned){
        setScanned(true)
        setText(data)
        console.log('Type: ' + type + '\nData: ' + data)
          axios.get(`https://nbrasil.online/qrcode/read?codigo=${data}`)
          .then(e=>{
            console.log(e.data)
            Alert.alert('TangPass', 'Dados Recebidos', [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
     
          })
      } 
      // tratamento de dados do scanned
  
  };

    if(permissao=== false) {
      return(
      <View style={styles.container}>
        <Text> Sem Acesso a Camera</Text>
      </View>)
    }

  return (
    <View style={styles.container}>
      <View style={styles.barqrbox}>
        <BarCodeScanner
          onBarCodeScanned={ tratementScannedBar }
          style={{width:250, height:200, marginTop:330}}
          
        />
          <Image source={require('../Assets/qrcode.png')} style={styles.img}/>
          <Link href="/Home_Estudante" style={styles.colortext}>VOLTAR</Link>
      </View>
      <Text style={styles.maintext}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barqrbox:{
    alignItems: 'center',
    justifyContent: 'center',
    height: "110%",
    width: "100%",
    overflow: 'hidden',
    borderRadius:0,
    backgroundColor:"#131313",
    padding:10,
  },
  colortext:{
    color:'#fff',
    bottom:230,
  },
  img:{
    bottom:270,
    width:300,
  }
});
