import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Header } from '../src/Components/header.js';
import { Footer } from '../src/Components/footer.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>

      <Text style={styles.text}>
        Agendar Saída
      </Text>

      <View style={styles.total}>

      </View>
      <View style={[styles.ccontainer, styles.shadowProp]}>
        <SimpleLineIcons name="user" size={18} color="#ADADAD" />

        <Text style={styles.select}>
          Selecione o estudante
        </Text>

        <AntDesign name="caretdown" size={18} color="#ADADAD" />
      </View>

      <View style={styles.chooseArea}>
        <TouchableOpacity style={[styles.choose, styles.shadowProp]}>
          <AntDesign name="calendar" size={18} color="#ADADAD" />
          <Text style={styles.select}>Selecionar Dia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.choose, styles.shadowProp]}>
          <AntDesign name="clockcircleo" size={18} color="#ADADAD" />
          <Text style={styles.select}>Selecionar Hora</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonarea}>
        <TouchableOpacity style={[styles.button, styles.shadowProp]}>
          <Text style={styles.buttontext}>
            Agendar Saída
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>
        Voltar
      </Text>

      <Footer/>
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
  text:{
    color: 'black',
    fontSize: 20,
    padding: 10,
    margin: 20
  },
  shadowProp: {  
    shadowOffset: {width: 4, height: 4},  
    shadowColor: '#696969',  
    shadowOpacity: 0.5,  
    shadowRadius: 3,  
  },
  ccontainer:{
    width:'80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#fff",
    padding: 15,
    margin: 5,
    shadowColor: '#000',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center'
  },
  select:{
    color: '#BFBFBF'
  },
  chooseArea:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '78%'
  },
  choose:{
    width: '50%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-between',
  },
  button:{
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 5,
    margin: 5,
  },
  buttontext:{
    color: 'white',
    padding: 5,
    textAlign: 'center'
  },
  buttonarea:{
    width: '84%'
  }
});
