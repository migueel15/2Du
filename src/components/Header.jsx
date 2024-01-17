import { StyleSheet } from "react-native"
import { View, Text } from "react-native-web"

const Header = () => {
  return (
    <View>
      <Text style={styles.text}>2Du</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    color: "#ffffff"
  }
})

export default Header
