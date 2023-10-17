import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {Crono} from '../src/Components/Cronograma';
import { Link } from 'expo-router';
import { Header } from '../src/Components/header.js';
import { Footer } from '../src/Components/footer.js';
import { Alata_400Regular, useFonts } from '@expo-google-fonts/alata';
import { useState,useEffect } from 'react';

import Logo from './Logo';



export default function PageE() {





    let [fontsLoaded] = useFonts({
        Alata_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      } 
    return (
        <View style={styles.container}>
          <Logo/>
            <Text style={styles.text}>
                Crônograma
            </Text>
 
            <Crono/>

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
    form:{
        padding:10,
        margin:10,
        backgroundColor:"red"
    }
});
