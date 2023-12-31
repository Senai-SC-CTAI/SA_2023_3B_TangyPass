import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Cronograma = () => {

    const [histori, setHistori] = useState([])
    const [logUser, setLogUser] = useState("");
    const [idUser, setIdUser] = useState(0);
    const [msg, setMsg] = useState("");

    useEffect(()=>{
        const getUser = async () => {
            setLogUser(await AsyncStorage.getItem("emailUser"))
        }
        getUser();
    },[logUser])

    useEffect(() => {
        const getIdAcc = async () => {
            let id = await AsyncStorage.getItem("idUser");
            if (id) {
                setIdUser(id);
                fetchCrono();
            }
        }
        getIdAcc();
        
    }, [idUser]);

    async function fetchCrono() {
        let url = `https://nbrasil.online/aluno/cronograma?id=${idUser}`
        const response = await axios.get(url)
        if(response.data.length < 1){
            setMsg("Nenhum registro encontrado")
        } else {
            setMsg("")
        }
        setHistori(response.data); 
    }

    

    const converterHorario = (e) => {
        let date = new Date(e * 1);
        let ano = date.getFullYear();
        let hora = date.getHours();
        let minutes = date.getMinutes();
        let dia = date.getDate(); // Use getDate para obter o dia do mês
        let mes = date.getMonth() + 1; // Adicione 1 porque os meses são indexados de 0 a 11

        if(minutes < 10){
            minutes = "0" + minutes;
        }
        return {
            year: ano,
            hour: `${hora}:${minutes}`,
            day: dia,
            month: mes,
            complete: `${dia}/${mes}/${ano} às ${hora}:${minutes}`
        };   
    };   

    const cancelar = async (e) => {
        let fetch = await axios.get(`https://nbrasil.online/aluno/cancelar?idUser=${idUser}&id=${e}`)
        let data = fetch.data;
        console.log(data)
        fetchCrono();
    }
 
     
    const cancelarBt = (data) => {
        if(data.status == "false"){
            return  <TouchableOpacity onPress={() => cancelar(data.id)} style={styles.btncancel}>
                        <Text style={styles.textbtn}>Cancelar</Text>
                    </TouchableOpacity>;
        }

        return;
        
    }

    return (
        // <View>
            // <Text style={{textAlign: "center", margin: 5}}>{msg}</Text>
            <FlatList
            data={histori.reverse()}
            keyExtractor={(item, index) => index.toString()} // Usando o índice como chave
            renderItem={({ item, index }) => (
                <View style={[styles.container, styles.shadowProp, styles.input]}>
                    <View style={{width: 20, height: 7, borderRadius: 100, position: "absolute", top: 15, right: 15, backgroundColor: item.status == "false" ? "red" : "green"}}></View>
                    <View style={styles.init}>
                        <SimpleLineIcons name="user" size={18} color="#919191" style={styles.icon} />
                        <Text style={styles.text}>{logUser}</Text>
                        <View style={styles.ccontainer}>
                            <View style={styles.area} > 
                                {console.log(item)}
                                <Text style={styles.content}>data: {converterHorario(item.data).complete}</Text>
                            </View>
                            <View style={styles.containeritens}>
                                {cancelarBt(item)} 
                            </View> 
                        </View>
                    </View>
                </View>
            )}
            style={styles.flatList}
        />
    // </View>

    )
}
const styles = StyleSheet.create({
    container: {
        width: 300,
        padding: 10,
        margin: 10,
        borderRadius: 500,
        marginBottom: 10,
        position: "relative",
    },
    status:{
        width: 15,
        height: 5,
    },

    shadowProp: {
        shadowColor: "#ccc",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 2.62,
        elevation: 5,
        borderRadius: 5

    },
    ccontainer: {
        borderRadius: 100,
    },
    area: {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 100,
    },
    init: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 10,
    },
    text: {
        color: '#919191',
        marginTop: -17,
        marginRight:-4,
    },
    icon: {
        marginRight: 210,
        marginTop: 10
    },
    content: {
        color: '#8C8C8C',
        padding: 10,
        textAlign: 'center', 
    },
    btncancel: {
        textAlign: 'center',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        flexDirection:'row'

    },
    textbtn: {
        color: '#131313',
        fontWeight: 'bold'
    },
});

export default Cronograma
