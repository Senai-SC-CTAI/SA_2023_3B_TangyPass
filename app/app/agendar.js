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
        <View style={styles.inputWrapperFirst}>
          <View style={styles.inputFirst}>
            <AntDesign name="user" size={20} color={"#888"} style={styles.iconFirstInput} />
            <AntDesign name="caretdown" size={16} color={"#888"} style={styles.iconSecond} />
            <TextInput
            style={styles.textInputFirst}
            placeholder='Selecione o estudante'
            onChangeText={(text) => console.log(text)}
            />
            <View></View>
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
    position: 'absolute',
    top: 140,
  },
  img: {
    width: 200,
    height: 100,
    top: 6,
    position: 'absolute'
  },
  inputFirst: {
    height: 50, 
    bottom: 70,
    backgroundColor: 'white',
    borderRadius: 3, 
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#959595',
    width: "calc(103% - 20px)",
    position: 'absolute',
  },
  textInputFirst:{
    fontFamily: 'alata',
    color: 'gray',
    position: 'absolute',
    top: 12,
    left: 38,
  },
  iconFirstInput: {
    left: 14,
    top: 7,
    position: 'absolute',
  },
  iconSecond: {
    position: 'absolute',
    right: 18,
    top: 13,
  },
  inputWrapperFirst: {
    flexDirection: 'row',
    width: "calc(100% - 1px)",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    gap: 15
  },
  input: {
    height: 50,
    width: "calc(100% / 2 - 10px)",
    backgroundColor: 'white',
    borderRadius: 3,
    top: 90,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#959595',
    position: 'relative'
  },
  inputWrapper: {
    flexDirection: 'row',
    width: "calc(100% - 1px)",
    display: "flex",
    textAlign: 'center',
    gap: 15
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
    width: "calc(100% - 10px)",
    height: 50,
    right: 4,
    borderRadius: 3,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#959595',
    right: 1,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'alata',
    marginTop: 14,
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
