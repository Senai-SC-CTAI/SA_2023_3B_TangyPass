import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const Cronograma = () => {

    const [crono, setcrono] = useState([]);
    const url = "http://localhost:3000/Datas";

    useEffect(() => {   
        async function fetchCrono() {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setcrono(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchCrono();
    }, []);

    function cancelar(event){

    }


  return (
    
    <FlatList
        data={crono}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={[styles.container, styles.shadowProp, styles.input]}>
            <View style={styles.init}>
                <SimpleLineIcons name="user" size={18} color="#919191" style={styles.icon} />
                <Text style={styles.text}>Email completo do estudante</Text>
                <View style={styles.ccontainer}>
                    <View style={styles.area}>
                        <Text style={styles.content}>{item.dia}</Text>
                        <Text style={styles.content}>{item.hora}</Text>
                    </View>
                    <TouchableOpacity onPress={cancelar} style={styles.btncancel}>
                        <Text style={styles.textbtn}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
           
            </View>
            </View>
        )}
        style={styles.flatList}
    />

  )
}
const styles = StyleSheet.create({
    container: {
        width: 300,
        padding: 10,
        margin: 10,
        borderRadius: 5,
        marginBottom:50,
    },
    shadowProp: {
        shadowOffset: { width: 0, height:1 },
        shadowColor: '#696969',
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    ccontainer: {},
    area: {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    input: {},
    init: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 5,
    },
    text: {
        color: '#919191',
        marginTop: -16,
    },
    icon: {
        marginRight: 210,
    },
    content: {
        color: '#8C8C8C',
        padding: 10,
        textAlign: 'center',
    },
    btncancel:{
        textAlign:'center',
    },
    textbtn:{
        color:'#131313',
        fontWeight:'bold'
    },
    flatList: {
        // Adicione estilos adicionais para a FlatList, se necessário
    },
});

export default Cronograma
