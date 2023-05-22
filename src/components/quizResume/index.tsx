import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QuizResumeProps from './types';
import CardResume from '../cardResume';

const QuizResume = ({ quiz }: QuizResumeProps) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', { quiz: quiz })}>
            <CardResume {...quiz} />
        </TouchableOpacity>
    )
}

export default QuizResume