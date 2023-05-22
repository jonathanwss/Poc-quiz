import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';
import QuizResume from '../quizResume';
import PopularProps from './types'

const Popular = ({ quiz }: PopularProps) => {
    return (
        <>
            {
                quiz.map(x => {
                    return (
                        <QuizResume quiz={x} />
                    )
                })
            }
        </>
        
    )
}

export default Popular