import React from 'react'
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { TitleProps } from './types';

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        color: '#333333',
        lineHeight: 20,
    }
})


const Title = (props: TitleProps) => {
    const { fontWeight } = props;
    const titleStyle = {fontWeight}

    return (
        <Text style={[styles.title, titleStyle]}>
            {props.text}
        </Text>
    )
}

export default Title