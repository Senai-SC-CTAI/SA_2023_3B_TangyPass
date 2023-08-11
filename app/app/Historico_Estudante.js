import { Alata_400Regular, useFonts } from '@expo-google-fonts/alata';
import { StyleSheet, Text, View } from 'react-native';
import { Div } from '../src/Components/HistoricoHoras';
import { Footer } from '../src/Components/footer';
import Logo from './Logo';


export default function Page() {
  let [fontsLoaded] = useFonts({
    Alata_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
    <Logo/>
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
    margin: 20,
    fontFamily:"Alata_400Regular",
  }
});
