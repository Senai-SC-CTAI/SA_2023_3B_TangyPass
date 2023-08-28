import Logo from './Logo'
import { Alata_400Regular, useFonts } from '@expo-google-fonts/alata';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import {Text,View,StyleSheet,KeyboardAvoidingView,Platform,TouchableOpacity,Modal,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


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
<Text style={styles.icntex}>{selectedStartDate} <AntDesign name="calendar" size={20} color={"black"} /> </Text>
</TouchableOpacity>


<TouchableOpacity
style={styles.inputBtn}
onPress={handleOnPressStartTime}
>
<Text style={styles.icntex}>{selectedStartTime} <Ionicons name="time-outline" size={24} color="black" /> </Text>
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

},
submitBtn: {

},

centeredView: {
flex: 1,
},

modalView: {

},

alinginp:{

},


btn:{
fontSize: "1.1em",
fontFamily: "Alata_400Regular",
color:'#fff'
},

textbtn:{



},
icntex:{
marginTop:10,
padding:2,
margin:5,
}


});
