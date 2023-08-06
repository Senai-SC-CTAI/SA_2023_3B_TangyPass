import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('../Assets/img.png')} style={styles.logo}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    logo: {
        margin: -20,
        width: 120,
        height: 100,
    }
});