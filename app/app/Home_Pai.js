import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from "expo-router";
import React, { useState, useEffect } from 'react';
import { useNavigation } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from "./Logo";

export default function Page() {
  const [logUser, setLogUser] = useState("");

  const navigation = useNavigation();
  
  async function logout(){
    await AsyncStorage.setItem("emailUser", "");
    navigation.navigate("/login_responsavel");
  }
  
  useEffect(()=>{
    const getUser = async () => {
      setLogUser(await AsyncStorage.getItem("emailUser"))
    }
    getUser();
  },[logUser])

  async function logout(){
    await AsyncStorage.setItem("emailUser", "");
    navigation.navigate("index");
  }

  return (
    <View style={styles.container}>

      <Logo/>
      <Text style={styles.usertitle}>Logado Como</Text>
      <Text>{logUser}</Text>

      <View style={styles.botoes}>

        <View style={styles.osdois1}>
          <Link href="agendar" style={styles.agnd} >
            <TouchableOpacity>
              <Text style={styles.agndtxt}>Agendar{"\n"}Saida</Text>
            </TouchableOpacity>
          </Link>

          <Link href="pedidos" style={styles.agnd}>
            <TouchableOpacity>
              <Text style={styles.agndtxt}>Pedidos de{"\n"} saida</Text>
            </TouchableOpacity>
          </Link>

          <View style={styles.osdois2}>

            <Link href="Cronograma_Responsavel" style={styles.hs}>
              <TouchableOpacity>
                <Text style={styles.hstxt}>Cronograma do estudante</Text>
              </TouchableOpacity>
            </Link>

            <Link href="Historico_Responsavel" style={[styles.hs2, styles.hs]}>
              <TouchableOpacity >
                <Text style={styles.hstxt}>Historico de entradas e saidas</Text>
              </TouchableOpacity>
            </Link>

          </View>

        </View>
      </View>
        <TouchableOpacity onPress={e => logout()} style={styles.saidabtn}>
          <Text style={styles.saidatxt}>Sair</Text>
        </TouchableOpacity>
      <Text style={styles.tangy}>Tangy.app @2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  botoes: {
    width: "90%",
    height: 250,
    marginTop: 70,
    marginBottom: 70,
    display: "flex",
    maxWidth: 320,
    flexDirection: "column",
  },
  usertitle: {
    fontSize: 18,
    marginTop: 10
  },
  osdois1: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    gap: 15,
    flexWrap: "wrap",
  },
  osdois2: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  agnd: {
    width: "47.5%",
    height: "90%",
    backgroundColor: "black",
    borderRadius: 5,
    textAlign: "center",
    justifyContent: "center",
  },
  hs2: {
    marginTop: 10
  },
  hs: {
    width: "100%",
    height: "50%",
    backgroundColor: "black",
    borderRadius: 5,
    textAlign: "center",


  },

  hst: {
    width: "100%",
    height: "50%",
    backgroundColor: "black",
    borderRadius: 5,
    textAlign: "center",
    marginTop: 5,

  },
  saidatxt: {
    fontSize: 18,
    color: "black",
  },
  saidabtn: {
    marginTop: 50,
  },
  tangy: {
    fontSize: 18,
    color: "#B6B6B6",
    marginTop: 50,
  },
  agndtxt: {
    fontSize: 18,
    color: "white",
    marginTop: 30,
    textAlign:'center'
  },
  hstxt: {
    fontSize: 18,
    color: "white",
    marginTop: 13
  },
});