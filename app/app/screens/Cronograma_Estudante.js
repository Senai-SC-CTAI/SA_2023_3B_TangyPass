import { StyleSheet, Text, View, Image } from 'react-native';
import {Crono} from '../Components/Cronograma.js';
import { Link } from 'expo-router';
import { Footer } from '../Components/footer.js';
import { Header } from '../Components/header.js';
import { Alata_400Regular, useFonts } from '@expo-google-fonts/alata';



export default function PageE() {
    let [fontsLoaded] = useFonts({
        Alata_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      } 
    return (
        <View style={styles.container}>
            <Header/>

            <Text style={styles.text}>
                Crônograma
            </Text>

            <Crono />
            <Crono />
            <Crono />

            <Link href="Home_Estudante">
                <Text style={styles.text}>
                    Voltar
                </Text>
            </Link>

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
    text: {
        color: 'black',
        fontSize: 20,
        padding: 10,
        margin: 20,
        fontFamily:"Alata_400Regular",
    },
});
