import { StyleSheet, Text, View, Image } from 'react-native';
import { Div } from '../Components/HistoricoHoras.js';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Footer } from '../Components/footer.js';
import { Header } from '../Components/header.js';

export default function Page() {
    return (
        <View style={styles.container}>
            <Header/>

            <Text style={styles.text}>
                Histórico
            </Text>

            <View style={[styles.ccontainer, styles.shadowProp]}>
                <SimpleLineIcons name="user" size={18} color="#ADADAD" />

                <Text style={styles.select}>
                    Selecione o estudante
                </Text>

                <AntDesign name="caretdown" size={18} color="#ADADAD" />
            </View>

            <Div />
            <Div />
            <Div />
            <Div />
            <Div />
            <Link href="./screens/Home_Pai">
                <Text style={styles.text}>
                    Voltar
                </Text>
            </Link>

            <Footer/>
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
    shadowProp: {
        shadowOffset: { width: 4, height: 4 },
        shadowColor: '#696969',
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    ccontainer: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        padding: 10,
        margin: 5,
        shadowColor: '#000',
        borderRadius: 5,
        marginBottom: 0,
        alignItems: 'center'
    },
    select: {
        color: '#BFBFBF'
    }
});
