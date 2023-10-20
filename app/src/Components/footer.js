import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function Footer() {
    return (
        <View style={styles.container}>
            <Text>
                Tangy.app{'\u00A9'} 2023
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        position: 'fixed',
        bottom:7,
   
    }
});