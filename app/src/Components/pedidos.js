import React from 'react';
import { View, StyleSheet, Text, FlatList, } from 'react-native';
import { useState, useEffect } from 'react';

import { SimpleLineIcons } from '@expo/vector-icons';


export function Pedidos() {

    const [crono, setcrono] = useState([])
    const url = "http://localhost:3000/Saida"

    useEffect(() => {   
        async function fectCrono() {
            const res = await fetch(url)
            const data = await res.json()
            setcrono(data)
        }

        fectCrono()
    }, [])

    return (
        <View style={[styles.container, styles.shadowProp, styles.input]}>
            <FlatList
                data={crono}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.init}>
                        <SimpleLineIcons name="user" size={18} color="#919191" />
                        <Text style={styles.text}>Email: {item.nomeEstudante}</Text>
                        <View style={styles.ccontainer}>
                            <View style={styles.area}>
                                <Text style={styles.content}>{item.data}</Text>
                                <View style={styles.area}>
                                    <Text style={styles.content}>{item.hora}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        borderRadius: 5
    },
    shadowProp: {
        shadowOffset: { width: 4, height: 4 },
        shadowColor: '#696969',
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    ccontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    area: {
        margin: 'auto',
        padding: 10,
        textAlign: 'center'
    },
    input: {
        display: 'flex',
        flexDirection: 'column'
    },
    init: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#919191',
        marginLeft: 5
    },
    content: {
        color: '#8C8C8C'
    }
});