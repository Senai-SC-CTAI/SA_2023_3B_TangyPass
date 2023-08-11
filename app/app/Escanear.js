import { Button, StyleSheet, Text, View } from 'react-native';
import { useState,useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [permissao,setPermissao] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text,setText] = useState('')

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
      setScanned(true)
      setText(data)
      console.log('Type: ' + type + '\nData: ' + data) // tratamento de dados do scanned
  };

    // if (permissao === null){
    //   return(
    //   <View style={styles.container}>
  
    //   </View>)
    // }

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
        onBarCodeScanned={ scanned ? undefined : tratementScannedBar}
        style={{width:890, height:890}}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>
        {/* {scanned && <Button title='DESEJA SCANNEAR' onPress={() => setScanned(false)} color="blue"/>} */}

        <View>
            
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor:"#fff",
    padding:10,
  }
});