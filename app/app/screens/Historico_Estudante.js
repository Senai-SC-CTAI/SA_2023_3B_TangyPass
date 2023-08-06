import { StyleSheet, Text, View, Image } from 'react-native';
import { Div } from '../Components/HistoricoHoras.js';
import { Footer } from '../Components/footer.js';
import { Header } from '../Components/header.js';

export default function Page() {
  return (
    <View style={styles.container}>
      <Header/>

      <Text style={styles.text}>
        Histórico
      </Text>

      <Div />
      <Div />
      <Div />
      <Div />
      <Div />

      <Text style={styles.text}>
        Voltar
      </Text>

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
  }
});
