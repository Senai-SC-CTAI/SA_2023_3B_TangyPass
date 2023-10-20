import React from 'react';
import { View, StyleSheet, Text, FlatList, } from 'react-native';
import { useState, useEffect } from 'react';

import { SimpleLineIcons } from '@expo/vector-icons';


export function Crono() {

    const [crono, setcrono] = useState([])
    const url = "http://localhost:3000/Datas"

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
                        <SimpleLineIcons name="user" size={18} color="#919191" style={styles.icon}/>
                        <Text style={styles.text}>Email completo do estudante</Text>
                        <View style={styles.ccontainer}>
                            <View style={styles.area}>
                                <Text style={styles.content}>{item.dia}</Text>
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
        width: '30%',
        display: 'flex',
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        borderRadius: 5,
    },
    shadowProp: {
        shadowOffset: { width: 0, height: 4 },
        shadowColor: '#696969',
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    ccontainer: {
       
    },
    area: {
        margin: 'auto',
        padding: 10,
        textAlign: 'center',
        display: 'flex',
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row"
    },
    input: {
      
    },
    init: {
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column',
        padding:5,
    
    },
    text: {
        color: '#919191',
        marginTop:-16,
   
    },

    icon:{
        marginRight:210,
    },

    content: {
        color: '#8C8C8C',
        padding:10,
        textAlign:'center'
    }
});