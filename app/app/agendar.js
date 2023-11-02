import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Header } from '../src/Components/header.js';
import { Footer } from '../src/Components/footer.js';
import { Link } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";


export const Dropdown = () => {
  return (
      <RNPickerSelect 
          onValueChange={(value) => console.log(value)}
          items={[
              { label: 'Anselmo', value: 'estudante1' },
              { label: 'Bruno', value: 'estudante2' },
              { label: 'Beca', value: 'estudante3' },
              { label: 'Alex', value: 'estudante4' },
              { label: 'Arthur', value: 'estudante5' },
              { label: 'Liara', value: 'estudante6' },
              
          ]}
      />
  );
};


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>

      <Text style={styles.text}>
        Agendar Saída
      </Text>

      <View style={styles.total}>

      </View>
    
            <Dropdown/>
  
      
    <Link href="Home_Pai" style={styles.text}> Voltar</Link>

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
  },
  pickerInput: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
  },

});
