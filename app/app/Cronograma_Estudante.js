import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Footer } from '../src/Components/footer.js';
import Cronograma from '../src/Components/Cronograma.js';
import Logo from './Logo';

export default function Cronograma_Estudante() {
    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.text}>Meus pedidos</Text>
            
            <Cronograma />

            <Link href="Home_Estudante">
                <Text style={styles.text}>Voltar</Text>
            </Link>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 16,
        marginBottom: 20
    },
    form: {
        padding: 10,
        margin: 10,
        backgroundColor: 'red',
    },
});
