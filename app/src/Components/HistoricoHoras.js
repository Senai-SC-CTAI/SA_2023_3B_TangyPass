import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export function Div() {
    return (
        <>
        
        <View style={[styles.container, styles.shadowProp]}>
            <Text>
                8:30
            </Text>

            <AntDesign name="caretup" size={18} color="#88D699" />
        </View>
        <View style={[styles.container, styles.shadowProp]}>
            <Text>
                14:30
            </Text>

            <AntDesign name="caretup" size={18} color="#88D699" />
        </View>
        <View style={[styles.container, styles.shadowProp]}>
            <Text>
                16:30
            </Text>

            <AntDesign name="caretup" size={18} color="#ef3b3b" />
        </View>
        </>
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
    }
});