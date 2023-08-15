import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import React from 'react';
import { Image, TextInput, TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from './Logo'

export default function Requisitar() {
  return (
    <View style={styles.container}>

      <View style={styles.subcontainer}>
          <Logo/>
          <Text style={styles.Rsd}>Requisitar Saida</Text>
      </View> 
     
      <View style={styles.introductiontext}>
          <TextInput style={styles.formats} placeholder='Selecionar Dia'>
          
          </TextInput>

           <TextInput style={styles.formats} placeholder='Selecionar Hora'>
  
          </TextInput>
      </View >
      <View style={styles.subcontaineredunc}>

        <TouchableOpacity style={styles.formatspress}>
            <View style={styles.PressText}>
                Requisitar Saida
            </View>
          </TouchableOpacity>

      </View>

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
  subcontainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',

  },
  Rsd:{
    textAlign:'center',
    fontSize:"1em",
  },

  introductiontext:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    width: "100%",
    maxWidth: 300
  },

  formats:{
    padding:15,
    borderRadius:5,
    width:"100%",
    margin:5,
    backgroundColor:'#fffff',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: '#000010',
    shadowOpacity: 0.6,
    shadowRadius:5,
    color:'#BFBFBF',
    textAlign:'center'
  },
  subcontaineredunc:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    width:"calc(100% - 10px)",
    maxWidth: 300
  },

  formatspress:{
    width:"100%",
    margin:5,
    padding:10,
    borderRadius:5,
    backgroundColor:'black',
  },
  PressText:{
    color:'#fff',
    textAlign:'center'
  },
});
