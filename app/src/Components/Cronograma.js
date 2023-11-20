import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Logo from '../../app/Logo';

const Cronograma = () => {


    axios.get('https://nbrasil.online/aluno/cronograma?id=2')
        .then(function (response) {
            console.log(response);
        })


    const converterHorario = (e) => {
        let unix = e;
        let date = new Date(unix * 1000);
        let ano = date.getFullYear();
        let hora = date.getHours();
        let minutes = date.getMinutes();
        let dia = date.getDate(); // Use getDate para obter o dia do mês
        let mes = date.getMonth() + 1; // Adicione 1 porque os meses são indexados de 0 a 11

        return {
            year: ano,
            hour: `${hora}:${minutes}`,
            day: dia,
            month: mes,
            complete: `${dia}/${mes}/${ano} às ${hora}:${minutes}`
        };
    };





    const [histori, setHistori] = useState([])
    const [logUser, setLogUser] = useState("");
    const [idUser, setIdUser] = useState(0);

     
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
            }
        }


        getIdAcc();
        async function fetchCrono() {
            let url = `https://nbrasil.online/aluno/cronograma?id=2&userId=${idUser}`
            try {
                const response = await axios.get(url);
                setHistori(response.data);  // Assuming your data is in response.data
            } catch (error) {
                console.error("Error fetching data:", error);
            }

        }

        fetchCrono();
    }, [idUser]);

    function cancelar(index) {
        const updatedHistori = [...histori]; // Cria uma cópia do estado atual
        updatedHistori.splice(index, 1); // Remove o item do índice especificado
        setHistori(updatedHistori); // Atualiza o estado com a nova lista
    }



    return (

        <FlatList
            data={histori}
            keyExtractor={(item, index) => index.toString()} // Usando o índice como chave
            renderItem={({ item, index }) => (
                <View style={[styles.container, styles.shadowProp, styles.input]}>
                    <View style={styles.init}>
                        <SimpleLineIcons name="user" size={18} color="#919191" style={styles.icon} />
                        <Text style={styles.text}>{logUser}</Text>
                        <View style={styles.ccontainer}>
                            <View style={styles.area}>
                                <Text style={styles.content}>data: {converterHorario(item.horario).complete}</Text>
                                <Text style={styles.content}>{item.horario}</Text>
                            </View>
                            <TouchableOpacity onPress={() => cancelar(index)} style={styles.btncancel}>
                                <Text style={styles.textbtn}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
            style={styles.flatList}
        />

    )
}
const styles = StyleSheet.create({
    container: {
        width: 300,
        padding: 10,
        margin: 10,
        borderRadius: 5,
        marginBottom: 50,
    },
    shadowProp: {
        shadowOffset: { width: 0, height: 1 },
        shadowColor: '#696969',
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    ccontainer: {},
    area: {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    input: {},
    init: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 5,
    },
    text: {
        color: '#919191',
        marginTop: -17,
        marginRight:-4,
    },
    icon: {
        marginRight: 210,
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
    flatList: {
        // Adicione estilos adicionais para a FlatList, se necessário
    },
});

export default Cronograma
