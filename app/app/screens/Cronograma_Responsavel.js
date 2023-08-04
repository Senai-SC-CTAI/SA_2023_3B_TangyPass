import { StyleSheet, Text, View } from 'react-native';
import { Div } from '../Components/HistoricoHoras.js';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Page() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Crônograma
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


            <Text style={styles.text}>
                Voltar
            </Text>
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
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    ccontainer: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        padding: 15,
        margin: 5,
        shadowColor: '#000',
        borderRadius: 5,
        marginBottom: 40,
        alignItems: 'center'
    },
    select: {
        color: '#BFBFBF'
    }
});
