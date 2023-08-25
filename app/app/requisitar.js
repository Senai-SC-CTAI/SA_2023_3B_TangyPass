import Logo from './Logo'
import { Alata_400Regular, useFonts } from '@expo-google-fonts/alata';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import {Text,View,StyleSheet,KeyboardAvoidingView,Platform,TouchableOpacity,Modal,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";

export default function requisitar() {


  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const [openStartTimePicker, setOpenStartTimePicker] = useState(false)
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate()), //today.getDate() + 1)
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [startedTime, setStartedTime] = useState("Hour:00 | Minute:00");

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
    <SafeAreaView style={{ flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : ""}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
        }}
      >
        <View style={{ flex: 1, alignItems: "center",}}>
          <Logo/>
          <Text style={styles.textSubHeader}>Requisitar saída</Text>

          <View style={styles.alinginp}>
            <View style={styles.alinginp}>
              <TouchableOpacity
                style={styles.inputBtn}
                onPress={handleOnPressStartDate}
              >
                <Text>{selectedStartDate}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.inputBtn}
                onPress={handleOnPressStartTime}
              >
                <Text>{selectedStartTime}</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => console.log("Subimit data")}
              style={styles.submitBtn}
            >
              <Text style={styles.btn}>Requisitar saída</Text>
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
                  mode="calendar"
                  minimumDate={startDate}
                  selected={startedDate}
                  onDateChanged={handleChangeStartDate}
                  onSelectedChange={(date) => setSelectedStartDate(date)}
                  options={{
                    backgroundColor: "#080516",
                    textHeaderColor: "#469ab6",
                    textDefaultColor: "#FFFFFF",
                    selectedTextColor: "#FFF",
                    mainColor: "#469ab6",
                    textSecondaryColor: "#FFFFFF",
                    borderColor: "rgba(122, 146, 165, 0.1)",
                  }}
                />
                <TouchableOpacity onPress={handleOnPressStartDate}>
                  <Text style={styles.textbtn}>Close</Text>
                </TouchableOpacity>

              </View>
            </View>
          </Modal>


          <Modal
            animationType="slide"
            transparent={true}
            visible={openStartTimePicker}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  mode="time"
                  minimumDate={startDate}
                  selected={startedTime}
                  onDateChanged={handleChangeStartTime}
                  onSelectedChange={(date) => setSelectedStartTime(date)}
                  options={{
                    backgroundColor: "#080516",
                    textHeaderColor: "#469ab6",
                    textDefaultColor: "#FFFFFF",
                    selectedTextColor: "#FFF",
                    mainColor: "#469ab6",
                    textSecondaryColor: "#FFFFFF",
                    borderColor: "rgba(122, 146, 165, 0.1)",
                  }}
                />
                <TouchableOpacity onPress={handleOnPressStartTime}>
                  <Text style={styles.textbtn}>Close</Text>
                </TouchableOpacity>

              </View>
            </View>
          </Modal>


        </View>
      </KeyboardAvoidingView>

        


     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 36,
    marginVertical: 60,
    color: "#111",
  },
  textSubHeader: {
    fontSize: "1.3em",
    fontFamily: "Alata_400Regular",
    marginTop: 10,
  },
  inputBtn: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#222",
    height: 50,
    paddingLeft: 8,
    fontSize: 18,
    marginTop: 14,
    maxWidth:300,
    width: "100% ",
  
  },
  submitBtn: {
    backgroundColor: "#000000",
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 16,
    maxWidth:300,
    width: "100% ",
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#080516",
    borderRadius: 20,
    padding: 35,
    maxWidth:350,
    width: "100% ",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  alinginp:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    width:'100%',
    marginTop:80,
  },

  btn:{
    fontSize: "1.1em",
    fontFamily: "Alata_400Regular",
    color:'#fff'
  },
  textbtn:{
    textAlign:'center',
    color:'#fff',
    marginTop:10,

  }
});
