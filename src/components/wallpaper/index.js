import React from 'react';
import { ImageBackground } from 'react-native';
import Styles from './styles';

export default function Wallpaper({ children, image }) {
    return (
        <ImageBackground style={Styles.pictured} source={image} >
            {children}
        </ImageBackground>
    )
}