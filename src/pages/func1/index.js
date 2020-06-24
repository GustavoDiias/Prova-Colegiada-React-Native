import React, { useState } from "react";
import Camera from "../../components/camera";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View, ImageBackground, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Mailer from "react-native-mail";
import styles from "./styles";

function Func1() {
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [photo, setPhoto] = useState(null);

  function onChangePhoto(newPhoto) {
    setPhoto(newPhoto);
    setIsCameraVisible(false);
  }

  function onCloseCamera() {
    setIsCameraVisible(false);
  }

  function enviarEmail() {
    const options = {
      subject: 'teste',
      recipients: ['gustavodias@unipam.edu.br'],
      body: 'teste',
      itsHTML: true,
      attachments: [
        {
          path: (photo),
        },
      ],
    };

    console.log(options);
    function callback(error) {
      if (error) {
        alert('Não foi possivel enviar o email');
      }
    }

    Mailer.mail(options, callback);
  }

  function limparFoto() {
    setPhoto(null);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.text} >Tire uma Foto e Envie Por Email!</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}
            onPress={() => {
              setIsCameraVisible(true);
            }}
          >
            <Icon name="add-a-photo" size={50} color={"#000000"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => {
              enviarEmail();

            }}
          >
            <Icon name="send" size={50} color={"#000000"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => {
              limparFoto();
            }}
          >
            <Icon name="remove-circle" size={50} color={"#000000"} />
          </TouchableOpacity>
          <Camera
            isVisible={isCameraVisible}
            onCloseCamera={onCloseCamera}
            onChangePhoto={onChangePhoto}
          />
        </View>
        <View style={styles.photo}>
          <ImageBackground
            style={{ width: "100%", height: "100%" }}
            source={{ uri: photo }}
          />
        </View>
      </View>
    </>

  );
}

export default Func1;
