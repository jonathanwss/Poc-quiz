import React from 'react'
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import BannerPng from '../../../assets/banner.png'

const styles = StyleSheet.create({
    cover: {
        height: 174
    }
})

const QuizImage = () => {
    return (
        <Card mode="contained">
            <Card.Cover style={styles.cover} source={BannerPng} />
        </Card>
    )
}

export default QuizImage