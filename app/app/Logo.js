import React from 'react'
import { View, Image, StyleSheet} from 'react-native'

const Logo = () => {
  return (
    <View>
        <Image source={require("../Assets/img.png")}  style={styles.logo}/>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
 logo:{
  height:110,
  width:120,
  marginTop: 50,
  marginBottom: 40
 }
})
