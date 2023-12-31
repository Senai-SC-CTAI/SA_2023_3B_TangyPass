import { StyleSheet, Text, View} from 'react-native';
import Div from '../src/Components/HistoricoHoras';
import { Footer } from '../src/Components/footer';
import Logo from './Logo';
import { Link } from 'expo-router';


export default function Page() {

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text1}>
        Histórico
      </Text>
      <Div />
      <Link style={styles.Link} href="Home_Estudante" >
        <Text style={styles.text}>
          Voltar
        </Text>
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
    padding: 10,
    margin: 40,
  },

  Link: {
    marginTop: 30,
  },
  text1: {
    color: 'black',
    fontSize: 16,
  }
});
