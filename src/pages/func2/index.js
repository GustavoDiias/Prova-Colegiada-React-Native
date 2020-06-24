import React, { useEffect, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import Wallpaper from '../../components/wallpaper'
import imagem from '../../assets/images/wallpaperMain.jpg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

import styles from './styles';


function Func2() {
    const [conteudo, setConteudo] = useState('');

    function leitura(event) {
        setConteudo(event.data);
    }
    return (
        <Wallpaper
            image={imagem}
            children={
                <>
                    <Text style={styles.text}>Posicione a Camera sobre o Codigo QR!</Text>
                    <View style={styles.container}>
                        <View style={styles.scanner}>
                            <QRCodeScanner onRead={(event) => leitura(event)}></QRCodeScanner>
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="O conteúdo aparecerá aqui"
                                value={conteudo}
                                onChangeText={(texto) => setConteudo(texto)}
                            />

                        </View>
                    </View>
                </>
            }
        />

    );
}

export default Func2;