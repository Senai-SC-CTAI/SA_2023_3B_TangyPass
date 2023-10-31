import React from 'react';
import { View, StyleSheet, Text,FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Div() {
    const [histori, setHistori] = useState([])
    const [idUser, setIdUser] = useState(0);
    
    useEffect(()=>{
        const getIdAcc = async () => {
            let id = await AsyncStorage.getItem("idUser");
            if(id){
                setIdUser(id);
            }
        }
        async function fectCrono() {
            let url = `https://nbrasil.online/aluno/historico?id=${idUser}`

            const res = await fetch(url)
            const data = await res.json()
            setHistori(data)
            getIdAcc();

        }
        fectCrono()

    },[idUser])

    return (
        <View style={styles.asdd}>
            <FlatList 
                    data={histori}
                    renderItem={({ item }) => (
                        <View style={[styles.container, styles.shadowProp]}> 
                            <Text style={styles.text}>Data: {item.horario}</Text>
                            <AntDesign name="caretup" size={18} color="#88D699" style={styles.icon} />
                        </View>
                    )}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    asdd: {
        height: 300,
        // width: 100,
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        // height: 100,
        // overflow: "hidden",
    },
    shadowProp: {
        shadowOffset: { width: 1, height: 3 },
        shadowColor: '#696969',
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    text: {
        textAlign: 'center',
        margin: 'auto',
        color:'#131313'
    },

    icon:{
        margin:10,
        padding:1,

    }
});

