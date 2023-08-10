import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

export function Pedidos() {
  return (
    <View style={styles.container}>
        <Image source={require('../Assets/img.png')} style={styles.Image}/>
        <Text style={styles.Text}>Pedidos de saída</Text>
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
  })