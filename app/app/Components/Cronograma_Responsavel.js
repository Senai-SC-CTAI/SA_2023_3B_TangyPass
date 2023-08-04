import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons';

export function CronoR() {
    return (
        <View style={[styles.container, styles.shadowProp, styles.input]}>
            <View style={styles.area}>
                <View style={styles.content}>
                    <View style={styles.itens}>
                        <Text style={styles.d}>
                            Dia
                        </Text>
                        <Text style={styles.d}>
                            05/07
                        </Text>
                    </View>

                    <View style={styles.itens}>
                        <Text style={styles.d}>
                            Horario
                        </Text>
                        <Text style={styles.d}>
                            12:30
                        </Text>
                    </View>
                </View>


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Excluir
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ccontainer}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
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
        textAlign: 'center',
    },
    area: {
        justifyContent: 'space-between',
        margin: 'auto',
        padding: 10
    },
    input: {
        display: 'flex',
        flexDirection: 'column'
    },
    init: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-evenly'
    },
    text: {
        color: '#919191'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    itens: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 5,
        padding: 8,
        margin: 15,
        width: 200
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
    d: {
        color: '#8C8C8C'
    }
});