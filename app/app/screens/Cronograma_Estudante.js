import { StyleSheet, Text, View } from 'react-native';
import Crono from '../components/Cronograma.js';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Crônograma
            </Text>

            <Crono />
            <Crono />
            <Crono />
            <Link href="Home_Estudante">
                <Text style={styles.text}>
                    Voltar
                </Text>
            </Link>
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
        fontSize: 20,
        padding: 10,
        margin: 20
    },
});
