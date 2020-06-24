import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Wallpaper from '../../components/wallpaper'
import imagem from '../../assets/images/wallpaper.jpg';
import Styles from './styles';

function Main({ navigation }) {
    function navegar(pagina) {
        switch (pagina) {
            case 1:
                navigation.navigate('Func1');
                break;
            case 2:
                navigation.navigate('Func2');
                break;
            case 3:
                navigation.navigate('Func3');
                break;
        }
    }

    return (
        <Wallpaper
            image={imagem}
            children={
                <>
                    <Text style={Styles.text} >PROVA COLEGIADA</Text>
                    <View style={Styles.container}>

                        <TouchableOpacity
                            style={Styles.button}
                            onPress={() => navegar(1)}>
                            <Text style={Styles.text}>Funcionalidade 1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.container}>
                        <TouchableOpacity
                            style={Styles.button}
                            onPress={() => navegar(2)}>
                            <Text style={Styles.text}>Funcionalidade 2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.container}>
                        <TouchableOpacity
                            style={Styles.button}
                            onPress={() => navegar(3)}>
                            <Text style={Styles.text}>Funcionalidade 3</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }
        />


    )
}

export default Main;