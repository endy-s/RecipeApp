import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        height: 120,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "purple",
        flexDirection: "row",
        overflow: "hidden",
    },
    imageStyle: {
        height: 100,
        width: 100,
    },
    textStyle: { 
        fontSize:30,
        color:"black",
        backgroundColor: "red",
    }
})

export default styles