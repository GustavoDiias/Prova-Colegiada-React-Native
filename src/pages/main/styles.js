import { StyleSheet, Dimensions } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 40;

const Styles = StyleSheet.create({

    container: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 100,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#800000',
        height: MARGIN,
        width: DEVICE_WIDTH - 50,
        borderRadius: 20,
        zIndex: 100,
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: "center",

    },
});

export default Styles;