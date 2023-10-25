import { Button, Modal, StyleSheet, Text, View,Image, Alert } from 'react-native';
import { useState,useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import { Link } from 'expo-router';
import{ useRouter } from 'expo-router';

export default function App() {
  const [permissao,setPermissao] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text,setText] = useState('')


  const router = useRouter();

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
          axios.post(`https://nbrasil.online/qrcode/read`, {id: Math.floor(Math.random() * 5 + 1), codigo: data})
          .then(e=>{
            console.log(e.data)
            Alert.alert('TangPass', `${e.data.nome}\n${e.data.email}`, [
              {text: 'OK', onPress: () => {
                setTimeout(()=>{
                    setScanned(false)
                },1000);
                console.log(e.data)
              }},
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
          style={styles.qrCode}
          
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
  qrCode: {
    position: 'absolute',
    width: "100%",
    height: "100%",
    opacity: .5
  },
  barqrbox:{
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: "100%",
    overflow: 'hidden',
    borderRadius:0,
    backgroundColor:"#131313",
    padding:10,
  },
  colortext:{
    color:'#fff',
    bottom:-170,
  },
  img:{
    // bottom:2,
    width:300,
  }
});
