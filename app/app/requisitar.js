import { Text, View, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Modal, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import { Link } from "expo-router";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

axios.get('https://nbrasil.online/aluno/saida?data=325678&repeat=true&id=20')
  .then(function (response) {
    console.log(response);
  })

export default function Page() {

  const [idUser, setIdUser] = useState();
  const [status, setStatus] = useState("Select data");

  useEffect(()=>{
    const getIdAcc = async () => {
      let id = await AsyncStorage.getItem("idUser");
      if(id){
        setIdUser(id);
      }
    }
    getIdAcc();
  },[idUser])


  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const [openStartTimePicker, setOpenStartTimePicker] = useState(false)
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate()), //today.getDate() + 1)
    "YYYY/MM/DD",
    "yyy-dd-mm"
  );

  const totime = new Date();
  const starttime = getFormatedDate(
    today.setDate(totime.getDate()), //today.getDate() + 1)
    "yyy-dd-mm"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  const [selectedStartTime, setSelectedStartTime] = useState();
  const [startedTime, setStartedTime] = useState();

  const enviarData = () => {
    const dataT = selectedStartDate.split('/')
    const ano = dataT[0]
    const mes = dataT[1]
    const anoT = dataT[2]
    const anoT2 = anoT.split(' ')
    const dia = anoT2[0]
    const horarioT = anoT2[1].split(':')
    const hora = horarioT[0]
    const min = horarioT[1]
    const data = new Date()
    data.setDate(dia)
    data.setMonth(mes)
    data.setFullYear(ano)
    data.setHours(hora, min)
    data.setMilliseconds(0)
    data.setSeconds(0)
    const timestamp = data.getTime()

    console.log(dia, mes, ano, hora, min, timestamp, data)

    axios.get(`https://nbrasil.online/aluno/saida?data=${timestamp}&id=${idUser}`)
    .then(e=>{
      let sts = e.data.status == "Sucesso" ? `Sucesso - id: ${e.data.idPedido}` : "Erro: data repetida";
      setStatus(sts);
    })
  }

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  function handleChangeStartTime(propTime) {
    setStartedTime(propTime);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const handleOnPressStartTime = () => {
    setOpenStartTimePicker(!openStartTimePicker)
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : ""}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image source={require('../Assets/img.png')} style={styles.img} />
          <Text style={styles.text}>Requisitar saída</Text>

          <View style={styles.align}>
            <TouchableOpacity
              style={styles.inputBtn}
              onPress={handleOnPressStartDate}

            >
              <Text>{selectedStartDate}</Text>
            </TouchableOpacity>
          </View>

          {/* Create modal for date picker */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={openStartDatePicker}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  mode="datepicker"
                  minimumDate={startDate}
                  selected={startedDate}
                  onDateChanged={handleChangeStartDate}
                  onSelectedChange={(date) => {

                    setSelectedStartDate(date)

                  }}
                  options={{
                    backgroundColor: "#fff",
                    textHeaderColor: "#131313",
                    textDefaultColor: "#131313",
                    selectedTextColor: "#131313",
                    mainColor: "#b5b5b5",
                    textSecondaryColor: "#131313",
                    borderColor: "rgba(122, 146, 165, 0.1)",
                  }}
                />
                <TouchableOpacity onPress={handleOnPressStartDate}>
                  <Text style={{ color: "#131313" }}>Close</Text>
                </TouchableOpacity>

              </View>
            </View>
          </Modal>



          <TouchableOpacity style={styles.formbtn} onPress={() => enviarData()}>
            <Text style={styles.textenv}>Enviar</Text>
          </TouchableOpacity>

          <Text>{status}</Text>

          <Link href="/Home_Estudante" style={styles.voltarText}>VOLTAR</Link>
          <Text style={styles.lastText}>Tangy.app @2023</Text>
        </View>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputBtn: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#222",
    height: 50,
    paddingLeft: 8,
    fontSize: 18,
    justifyContent: "center",
    marginTop: 14,
    width: '100%',
    maxWidth: 300,
    padding: 10,
    margin: 10,
    marginTop: 200,
  },
  submitBtn: {
    backgroundColor: "#342342",
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 16,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  align: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  img: {
    width: 200,
    height: 100,
  },
  text: {
    marginTop: 30,
  },
  voltarText: {
    marginTop: 200,
    color: 'black',
  },
  lastText: {
    marginTop: 12,
    color: 'gray',
  },
  textenv: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
    top: 5,
  },
  formbtn: {
    padding: 10,
    margin: 10,
    backgroundColor: '#131313',
    width: 300,
    height: 50,
    borderRadius: 5,

  }


});