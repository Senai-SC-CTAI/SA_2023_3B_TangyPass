import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Agendar() {
  return (
    <View style={styles.container}>
      <Image source={require('../Assets/img.png')} style={styles.img} />
      <Text style={styles.text}>Agendar saída</Text>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <View style={styles.inputFirst}>
            <AntDesign name="user" size={20} color={"#888"} style={styles.iconFirstInput} />
            <AntDesign name="caretdown" size={16} color={"#888"} style={styles.iconSecond} />
            <TextInput
            style={styles.textInputFirst}
            placeholder='Selecione o estudante'
            onChangeText={(text) => console.log(text)}
            />
            <View></View>
          </View>
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
          <Text style={styles.textButton}>Agendar saída</Text>  
      </View>
      <Link href={"/Home_Pai"} style={styles.voltarText}>VOLTAR</Link>
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
    fontSize: 21,
    bottom: 186
  },
  img: {
    width: 200,
    height: 100,
    bottom: 264,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
  },
  inputFirst: {
    height: 50,
    paddingLeft: 10,
    position: 'absolute',
    bottom: 100,
    width: 290,
    backgroundColor: 'white',
    borderRadius: 3,
    flex: 1,
    marginRight: 10,
    paddingRight: 6,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#959595',
  },
  textInputFirst:{
    fontFamily: 'alata',
    color: 'gray',
    position: 'absolute',
    top: 12,
    left: 38,
  },
  iconFirstInput: {
    marginRight: 101,
    marginTop: 14,
  },
  iconSecond: {
    position: 'absolute',
    right: 18,
    top: 13,
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
    left: 5,
    top: 15,
    position: 'absolute'
  },
  footerContainer: {
    marginTop: 10,
  },
  inputText: {
    position: 'absolute',
    top: 12,
    left: 32,
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
    textAlign: 'center',
    fontFamily: 'alata',
    position: 'absolute',
    top: 14,
    right: 98,
  },
  voltarText: {
    bottom: 136,
    fontFamily: 'alata',
    position: 'absolute',
    color: 'black',
    cursor: 'pointer'
  },
  lastText: {
    position: 'absolute',
    bottom: 80,
    color: 'gray'
  }
});
