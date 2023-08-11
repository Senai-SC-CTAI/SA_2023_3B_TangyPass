import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import React from 'react';
import { Image, TextInput, TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Requisitar() {
  return (
    <View style={styles.container}>
      <Image source={require('../Assets/img.png')} style={styles.img} />
      <Text style={styles.text}>Requisitar saída</Text>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
      <View style={styles.input}>
        <Icon name="calendar" size={20} color="#888" style={styles.icon} />
          <TextInput
            style={styles.inputText}
            placeholder='Selecionar dia'
            onChangeText={(text) => console.log(text)}
          />
          <View></View>
          </View>
          <View style={styles.input}>
          <Icon name="clock-outline" size={20} color="#888" style={styles.icon} />
          <TextInput
            style={styles.inputText}
            placeholder='Selecionar hora'
            onChangeText={(text) => console.log(text)}
          />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.textButton}>Requisitar Saída</Text>
      </View>      
        <Link href="/Home_Estudante" style={styles.voltarText}>VOLTAR</Link>
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
  text: {
    fontFamily: 'alata',
    fontWeight: 'bold',
    fontSize: 20,
    top: 210,
    position: 'absolute'
  },
  img: {
    width: 200,
    height: 100,
    bottom: 270,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    paddingLeft: 10,
    width: 140,
    backgroundColor: 'white',
    borderRadius: 3,
    flex: 1,
    marginRight: 10,
    textAlign: 'right',
    paddingRight: 126,
    bottom: 20,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#959595',
  },
  icon: {
    left: 7,
    top: 15,
    position: 'absolute'
  },
  footerContainer: {
    marginTop: 10,
  },
  inputText: {
    position: 'absolute',
    top: 10,
    left: 33,
    color: 'gray',
    fontFamily: 'alata',
  },
  buttonContainer: {
    backgroundColor: 'black',
    width: 290,
    height: 50,
    right: 4,
    borderRadius: 3,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#959595',
  },
  textButton: {
    color: 'white',
    right: 92,
    top: 13,
    fontFamily: 'alata',
    position: 'absolute',
    cursor: 'pointer'
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
