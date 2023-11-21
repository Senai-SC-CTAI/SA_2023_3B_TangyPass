import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Div() {


    const converterHorario = (e) => {
        let unix = e;
        
        let date = new Date(unix * 1000)
        let ano = date.getFullYear();
        let hora = date.getHours();
        let minutes = date.getMinutes()
        let dia = date.getDay();
        let mes = date.getMonth();

        if(minutes < 10){
            minutes = `0${minutes}`
        }

        return{
            year: ano,
            hour: `${hora}:${minutes}`,
            day: dia,
            month: mes,
            complete: `${dia}/${mes}/${ano} às ${hora}:${minutes}`
        }
    }




    const [histori, setHistori] = useState([])
    const [idUser, setIdUser] = useState(0);

    useEffect(() => {
        const getIdAcc = async () => {
            let id = await AsyncStorage.getItem("idUser");
            if (id) {
                setIdUser(id);
            }
        }
        async function fectCrono() {
            let url = `https://nbrasil.online/aluno/historico?id=${idUser}`

            const res = await fetch(url)
            const data = await res.json()
            setHistori(data)
            getIdAcc();

        }
        fectCrono()

    }, [idUser])

    return (
        <View style={styles.asdd}>
            <FlatList
                data={histori}
                renderItem={({ item }) => (
                    <View style={[styles.container, styles.shadowProp]}>
                        <Text style={styles.text}>data: {converterHorario(item.horario).complete}</Text>
                        {/* <Text style={styles.text}>/{converterHorario(item.horario).month}</Text>
                            <Text style={styles.text}>/{converterHorario(item.horario).year}</Text>
                            <Text style={styles.text}>{converterHorario(item.horario).hour}</Text> */}

                        <AntDesign name="caretup" size={18} color="#88D699" style={styles.icon} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    asdd: {
        height: 300,
        width: 300,
    },
    container: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        // height: 100,
        // overflow: "hidden",
    },
    shadowProp: {
        shadowColor: "#8c9494",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 4,

    },
    text: {
        textAlign: 'center',
        margin: 'auto',
        color: '#131313',
        border: 2,
        borderStyle: "solid",
        borderColor: "black"
    },

    icon: {
        margin: 10,
        padding: 1,

    }
});

