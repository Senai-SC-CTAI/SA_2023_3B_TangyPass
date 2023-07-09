import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons';

export function Crono() {
    return (
        <View style={[styles.container, styles.shadowProp, styles.input]}>
            <View style={styles.init}>
                <SimpleLineIcons name="user" size={18} color="#919191" />

                <Text style={styles.text}>
                    Email completo do estudante
                </Text>

            </View>
            <View style={styles.ccontainer}>
                <View style={styles.area}>
                    <Text style={styles.content}>
                        Dia
                    </Text>

                    <Text style={styles.content}>
                        05/07
                    </Text>
                </View>
                <View style={styles.area}>
                    <Text style={styles.content}>
                        Horario
                    </Text>

                    <Text style={styles.content}>
                        12:30
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
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
        color: '#8C8C8C'
    }
});