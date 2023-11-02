import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';
import Div from '../src/Components/HistoricoHoras';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Footer } from '../src/Components/footer';
import Logo from './Logo';
import { useState,useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select';



export const Dropdown = () => {
    return (
        <RNPickerSelect 
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Anselmo', value: 'estudante1' },
                { label: 'Bruno', value: 'estudante2' },
                { label: 'Beca', value: 'estudante3' },
                { label: 'Alex', value: 'estudante4' },
                { label: 'Arthur', value: 'estudante5' },
                { label: 'Liara', value: 'estudante6' },
                
            ]}
        />
    );
};


export default function Page() {

    return (
        <View style={styles.container}>
            <View style={styles.alinglogo}>
                <Logo />
            </View>

            <Text style={styles.text}>
                Histórico
            </Text>

            <Dropdown/>

            <Link href="Home_Pai">
                <Text style={styles.textvolt}>
                    Voltar
                </Text>
            </Link>

            <View style={styles.alingfooter}>
                <Footer />
            </View>
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
        padding: 10,
        margin: 20,
        bottom:190,
    },
    textvolt: {
        color: 'black',
        fontSize: 16,
        padding: 10,
        margin: 20, 
    },
    shadowProp: {
        shadowOffset: { width: 4, height: 4 },
        shadowColor: '#696969',
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    select: {
        color: '#BFBFBF',
    },
    alinglogo:{
        bottom:200,
    },
    alingfooter:{
        top:50,
    }
});
