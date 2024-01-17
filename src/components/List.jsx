import { StyleSheet, Text, View } from "react-native"

const List = ({title}) => {
  return(
  <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#181826",
    width: "150px",
    height: "150px",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 20,
  },
  text : {
    color: "#ffffff"
  },
  // borderColor,
  // hoverColor,
})

export default List
