import { StyleSheet, Dimensions } from "react-native";
const DEVICE_WIDTH = Dimensions.get('window').width;

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#DCDCDC',
        flex: 1,
    },
    scanner: {
        width: 393,
        height: 100,
        alignSelf: "center",
        margin: 65,
        flexDirection: "column",
    },
    text: {
        color: 'black',
        backgroundColor: 'transparent',
        fontSize: 20,
        marginLeft: 10,
        textDecorationLine: "underline",
        textShadowColor: 'black',
        textShadowRadius: 10,
    },
    input: {
        backgroundColor: '#C0C0C0',
        width: DEVICE_WIDTH - 40,
        height: 100,
        marginHorizontal: 20,
        marginBottom: 100,
        paddingLeft: 45,
        borderRadius: 20,
        color: 'black',
    },
    inputWrapper: {
        flex: 1,
        marginTop: 350,
    },

});
export default Styles;