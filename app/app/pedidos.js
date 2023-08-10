import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../Assets/img.png')} style={styles.Image}/>
      <Text style={styles.Text}>Pedidos de saída</Text>
      <StatusBar style="auto" />
      <View style={styles.firstCardCont}>
      <AntDesign name="user" size={20} color={"#888"} style={styles.iconFirstInput} />
        <Text style={styles.textCard}>Email completo do aluno</Text>
        <Text style={styles.diaText}>Dia</Text>
        <Text style={styles.dataText}>05/07</Text>
        <Text style={styles.horaText}>Horário</Text>
        <Text style={styles.numHoraText}>12:30</Text>
        <View style={styles.buttonCont}>
        <Text style={styles.buttonText}>Negar</Text>
        </View>
        <View style={styles.buttonContTwo}>
        <Text style={styles.buttonTextTwo}>Aceitar</Text>
        </View>
      </View>

      <View style={styles.secondCardCont}>
      <AntDesign name="user" size={20} color={"#888"} style={styles.iconSecondInput} />
        <Text style={styles.textTwoCard}>Email completo do aluno</Text>
        <Text style={styles.diaTwoText}>Dia</Text>
        <Text style={styles.dataTwoText}>05/07</Text>
        <Text style={styles.horaTwoText}>Horário</Text>
        <Text style={styles.numHoraTwoText}>12:30</Text>
        <View style={styles.buttonTwoCont}>
        <Text style={styles.buttonTwoText}>Negar</Text>
        </View>
        <View style={styles.buttonContTwo2}>
        <Text style={styles.buttonTextTwo2}>Aceitar</Text>
        </View>
      </View>
      <Link href="/Home_Pai" style={styles.voltarText}>VOLTAR</Link>
      <Text style={styles.lastText}>Tangy.app @2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 200,
    height: 100,
    bottom: 170,
  },
  Text: {
    fontFamily: 'alata',
    fontWeight: 'bold',
    fontSize: 20,
    top: 150,
    position: 'absolute',
  },
  iconFirstInput: {
    top: 7,
    left: 6,
  },
  firstCardCont: {
    backgroundColor: 'white',
    width: 300,
    height: 155,
    bottom: 50,
    borderRadius: 3,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#959595',
  },
  textCard: {
    fontFamily: 'alata',
    color: '#919191',
    bottom: 12,
    left: 35,
  },
  buttonCont: {
    backgroundColor: 'black',
    width: 126,
    height: 40,
    bottom: 13,
    left: 15,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'alata',
    textAlign: 'center',
    top: 8,
  },
  buttonTextTwo: {
    color: 'white',
  },
  buttonContTwo: {
    backgroundColor: 'black',
    width: 126,
    height: 40,
    bottom: 53,
    left: 160,
    borderRadius: 3,
  },
  buttonTextTwo: {
   color: 'white',
   top: 8,
   textAlign: 'center', 
  },
  diaText: {
    fontFamily: 'alata',
    color: '#919191',
    left: 63,
  },
  dataText: {
    fontFamily: 'alata',
    color: '#919191',
    left: 55,
  },
  horaText: {
    fontFamily: 'alata',
    color: '#919191',
    left: 197,
    bottom: 36,
  },
  numHoraText: {
    fontFamily: 'alata',
    color: '#919191',
    left: 202,
    bottom: 38,
  },
  secondCardCont: {
    backgroundColor: 'white',
    width: 300,
    height: 155,
    bottom: 10,
    borderRadius: 3,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#959595',
  },
  iconSecondInput: {
    top: 7,
    left: 6,
  },
  textTwoCard: {
    fontFamily: 'alata',
    color: '#919191',
    bottom: 12,
    left: 35,
  },
  diaTwoText: {
    fontFamily: 'alata',
    color: '#919191',
    left: 63,
  },
  dataTwoText: {
    fontFamily: 'alata',
    color: '#919191',
    left: 55,
  },
  horaTwoText: {
    fontFamily: 'alata',
    color: '#919191',
    left: 197,
    bottom: 36,
  },
  numHoraTwoText: {
    fontFamily: 'alata',
    color: '#919191',
    left: 202,
    bottom: 38,
  },
  buttonTwoCont: {
    backgroundColor: 'black',
    width: 126,
    height: 40,
    bottom: 13,
    left: 15,
    borderRadius: 3,
  },
  buttonTwoText: {
    color: 'white',
    fontFamily: 'alata',
    textAlign: 'center',
    top: 8,
  },
  buttonContTwo2: {
    backgroundColor: 'black',
    width: 126,
    height: 40,
    bottom: 53,
    left: 160,
    borderRadius: 3,
  },
  buttonTextTwo2: {
   color: 'white',
   top: 8,
   textAlign: 'center', 
  },
  voltarText: {
    bottom: 136,
    fontFamily: 'alata',
    position: 'absolute',
    color: 'black',
    cursor: 'pointer'
  },
  lastText: {
    bottom: 70,
    color: 'gray',
    position: 'absolute'
  }
});
