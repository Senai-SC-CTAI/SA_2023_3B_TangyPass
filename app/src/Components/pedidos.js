import React from 'react';
import { View, StyleSheet, Text, FlatList, } from 'react-native';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Pedidos() {

    const [idUser, setIdUser] = useState(0);
    const [crono, setcrono] = useState([])

    const [msg, setMsg] = useState("");

    useEffect(()=>{
        const getUser = async () => {
            setIdUser(await AsyncStorage.getItem("emailUser"))
            fectCrono()
        }
        getUser();
    },[idUser])

    async function fectCrono() {
        let url = `https://nbrasil.online/responsavel/pedidos?id=${idUser}`
        console.log(url)
        const res = await fetch(url)
        const data = await res.json()
        if(data.length < 1) {
            setMsg("Nenhum registro encontrado");
        } else {
            setMsg("");
        }
        setcrono(data)
    }

    const aceitar = (e) => {
        fetch(`https://nbrasil.online/responsavel/aceitarnegar?id=${e}`)
        .then(e=>e.text())
        .then(e=>{
            fectCrono();
        })
    }

    const negar = (e) => {
        fetch(`https://nbrasil.online/responsavel/aceitarnegar?id=${e}&type=negar`)
        .then(e=>e.text())
        .then(e=>{
            fectCrono();
        })
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

    return (
        <View style={[styles.container, styles.shadowProp, styles.input]}>
            <Text style={{textAlign: "center", margin: 5}}>{msg}</Text>
            <FlatList
                data={crono}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.init}>
                        <SimpleLineIcons name="user" size={18} color="#919191" style={styles.icon} />
                        <Text style={styles.text}>{item.nomeEstudante}</Text>
                        <View style={styles.ccontainer}>
                            <View style={styles.area}>
                                <Text style={styles.content}>{converterHorario(item.data).complete}</Text>
                            </View>
                            
                        </View>
                        <View style={styles.areabt}>
                            <TouchableOpacity onPress={()=>aceitar(item.id)} style={styles.btt}>
                                <Text style={styles.txtt}>Aceitar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>negar(item.id)} style={styles.btt}>
                                <Text style={styles.txtt}>Negar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        maxWidth: 300,
        display: 'flex',
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        borderRadius: 5,
    },
    areabt:{
        display: "flex",
        gap: 20,
        flexDirection: "row"
    },
    btt: {
        padding: 7,
        width: 75,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: "black"
    },
    txtt: {
        color: "white"
    },
    shadowProp: {
        
    },
    ccontainer: {
       
    },
    area: {
        margin: 'auto',
        padding: 10,
        textAlign: 'center',
        display: 'flex',
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row"
    },
    input: {
      
    },
    init: {
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column',
        padding:5,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: '#696969',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        margin: 10
    
    },
    icon: {
        margin: 10
    },
    text: {
        color: '#919191',
        // marginTop:-16,
   
    },

    content: {
        color: '#8C8C8C',
        padding:10,
        textAlign:'center'
    }
});