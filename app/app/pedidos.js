import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Touchable, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Alata_400Regular, useFonts } from '@expo-google-fonts/alata';
import { Feather } from '@expo/vector-icons';


export default function App() {
  let [fontsLoaded] = useFonts({
    Alata_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } 
  
  return (
    <View style={styles.container}>
      <Image source={require('../Assets/img.png')} style={styles.Image}/>
      <Text style={styles.Text}>Pedidos de saída</Text>


        <View style={styles.card}>

      <View style={styles.top}>
        <Feather name="user" size={24} color="#919191" />
        <Text style={styles.txt}>Email completo do aluno</Text>
      </View>

            <View style={styles.mid}>
        <View style={styles.dia}>
          <Text style={styles.txt1}>Dia</Text>
          <Text style={styles.txt1}>12/04/2023</Text>
        </View>

        <View style={styles.dia}>
          <Text style={styles.txt1}>Horario</Text>
          <Text style={styles.txt1}>12:00</Text>
        </View>
            </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.bt1}>
            <Text style={styles.txt2}>Negar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bt1}>
            <Text style={styles.txt2}>Aceitar</Text>
          </TouchableOpacity>
        </View>

        </View>

        <View style={styles.card1}>

      <View style={styles.top}>
        <Feather name="user" size={24} color="#919191" />
        <Text style={styles.txt}>Email completo do aluno</Text>
      </View>

            <View style={styles.mid}>
        <View style={styles.dia}>
          <Text style={styles.txt1}>Dia</Text>
          <Text style={styles.txt1}>12/04/2023</Text>
        </View>

        <View style={styles.dia}>
          <Text style={styles.txt1}>Horario</Text>
          <Text style={styles.txt1}>12:00</Text>
        </View>
            </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.bt1}>
            <Text style={styles.txt2}>Negar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bt1}>
            <Text style={styles.txt2}>Aceitar</Text>
          </TouchableOpacity>
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
    alignItems:"center"
  },
  card:{
    width:"90%",
    height:170,
    marginTop:70,
    display:"flex",
    borderRadius:5,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: '#8C8C8C',
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  card1:{
    width:"90%",
    height:170,
    marginTop:40,
    marginBottom:70,
    display:"flex",
    borderRadius:5,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: '#8C8C8C',
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  top:{
    width:"100%",
    height:"20%",
    flexDirection:"row",
    marginLeft:20,
    marginTop:15, 
  },
  txt:{
    fontFamily:"Alata_400Regular",
    fontSize:16,
    color:"#919191",
    marginTop:2,
    marginLeft:5
  },
  mid:{
    width:"100%",
    height:"40%",
    flexDirection:"row",
  },
  dia:{
    width:"50%",
    height:"100%",
    flexDirection:"colum",
    alignItems:"center",
    justifyContent:"center"
  },
  txt1:{
    fontFamily:"Alata_400Regular",
    fontSize:14,
    color:"#8C8C8C",
  },
  txt2:{
    fontFamily:"Alata_400Regular",
    fontSize:14,
    color:"white",
  },
  buttons:{
    width:"100%",
    height:"30%",
    flexDirection:"row",
    gap:15,
    alignItems:"center",
    justifyContent:"center"
  },

  bt1:{
    width:"40%",
    height:"70%",
    backgroundColor:"black",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
  },
  voltarText:{
    fontFamily:"Alata_400Regular",
    fontSize:18,
    color:"black",
    marginBottom:50,
  },
  lastText:{
    fontFamily:"Alata_400Regular",
    fontSize:18,
    color:"#B6B6B6",
  }
});
