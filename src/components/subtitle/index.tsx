import React from 'react'
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { SubtitleProps } from './types';

const styles = StyleSheet.create({
    subtitile: {
        fontWeight: "600",
        fontSize: 14,
        color: '#999999',
        lineHeight: 17,
        fontFamily: "Montserrat-Semibold"
    }
})

const SubTitle = (props: SubtitleProps) => {
    return (
        <Text style={styles.subtitile}>
            {props.text}
        </Text>
    )
}

export default SubTitle