import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export function Div() {
    return (
        <View style={[styles.container, styles.shadowProp]}>
            <Text>
                12:30
            </Text>

            <AntDesign name="caretup" size={18} color="#88D699" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
    }
});