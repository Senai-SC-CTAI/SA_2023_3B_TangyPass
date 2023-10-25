import { StyleSheet, Text, View,Image, TextInput, Pressable,TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useFonts, Alata_400Regular } from '@expo-google-fonts/alata';
import Logo from "./Logo";
export default function Page() {

  let [fontsLoaded] = useFonts({
    Alata_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }


  const  [password,setPassword]  = useState('')
  const [email,setEmail] = useState('')

  useEffect(() =>{
      datareturn()
  },[])

  const datareturn = async () =>{
          try{
            const res = await axios.post('https://nbrasil.online/aluno/login',{
              user:"bruno_wotzke",
              password:"123"
          })

           console.log(res.data);
          } catch(erro){
              console.log(erro);
          }
  }
 
 
  return (
    <View style={styles.container}>
    <Logo/>
        <View>
            <Text style={styles.tex}>Responsável</Text>
        </View>

        <TextInput 
        placeholder="Usúario" 
        style={styles.inp}
        onChange={e => setEmail(e)}
        />
        <TextInput 
          placeholder="Insira sua senha" 
          style={styles.inp} 
          secureTextEntry={true}
          onChange={e => setPassword(e)}
        />
       
        <Link href="Home_Estudante" style={styles.btn}>
        <TouchableOpacity style={styles.btn}>
              <View>
                <Text style={styles.texPres}>ENTRAR</Text>
            </View>
        </TouchableOpacity>
        </Link>

        <Link href="/" style={styles.ty}>Entrar como estudante</Link>

        <View style={styles.retangle}>
          <Image source={require('../Assets/Polygon2.png')}></Image>
        </View>

        <Link href="Recuperar_Senha" style={styles.ty}> Recuperar Senha</Link>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  logo:{
    width:110,
    height:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  },
  tex:{
    fontSize:25,
    marginTop:90,
    padding:10,
    fontFamily:"Alata_400Regular",
  }, 
  inp:{
    color:'#9A9A9A', 
    fontSize:18,
    maxWidth:262,
    width:"100%",
    backgroundColor:'#fff',
    padding:15,
    margin:20,
    borderRadius:5,
    shadowColor:'#00000010',
    shadowOffset: {width: 5, height:5},
    shadowRadius:30,
    elevation:5,
    fontFamily:"Alata_400Regular",

  },
  btn:{
    backgroundColor:'#000',
    padding:5,
    maxWidth:262,
    width:"100%",
    borderRadius:5,
  },
  texPres:{
    color:'#fff',
    textAlign:'center',
    padding:5,
    fontFamily:"Alata_400Regular",
  },
  ty:{
    fontSize:16,
    padding:10,
    fontFamily:"Alata_400Regular",
  },
  retangle:{

    left:"91%",
    right:0,
    bottom:0,
    position:"absolute",
    },
});