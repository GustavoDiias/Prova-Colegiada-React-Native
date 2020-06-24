import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photo: {
    width: 300,
    height: 500,
    backgroundColor: "transparent",
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  text: {
    color: 'black',
    backgroundColor: 'transparent',
    fontSize: 25,
    textDecorationLine: "underline",
    textShadowColor: 'black',
    textShadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 150,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default Styles;
