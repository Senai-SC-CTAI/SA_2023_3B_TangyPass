import React from 'react';
import { View, StyleSheet, Text,FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState,useEffect } from 'react';

export function Div() {
    const [histori, setHistori] = useState([])
    const url = "http://localhost:3000/Historico"

    useEffect(() => {   
        async function fectCrono() {
            const res = await fetch(url)
            const data = await res.json()
            setHistori(data)
        }

        fectCrono()
    }, [])
    return (
        <>
        
        <View >
        <FlatList
                data={histori}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.container, styles.shadowProp]}> 
                        <Text style={styles.text}>Nome: {item.nomeEstudante} Hora: {item.horaEstudante} Dia: {item.data}</Text>
                        <AntDesign name="caretup" size={18} color="#88D699" style={styles.icon} />
                    </View>
                )}
            />
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center'
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

