import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import { ButtonProps } from './types';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#21BDCA',
        borderRadius: 10
    },
})

const CustomButton = ({ text, onPress }: ButtonProps) => {
    return (
        <Button onPress={onPress} style={styles.button} mode="contained">
            {text}
        </Button>
    )
}

export default CustomButton