import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { Banner, SubTitle, Recents, Popular, Space } from '../../components';
import { Quiz } from '../../types';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
      paddingHorizontal: 24
    },
  });
  

const Home = () => {
    const [quiz] = useState<Quiz[]>([
        {
            title: 'Technology',
            numberOfQuestions: 10,
            duration: '1 hour 20 min',
            stars: 4.8,
            questions: [],
            color: '#f3f3f3',
            icon: 'camera',
            iconColor: 'red',
            completition: 0.2,
            description: 'Brief explanation about this quiz'
        },
        {
            title: 'Sport',
            numberOfQuestions: 10,
            duration: '1 hour 20 min',
            stars: 4.8,
            questions: [],
            color: 'red',
            icon: 'star',
            completition: 0.6,
            iconColor: '#f2f2f2',
            description: 'Brief explanation about this quiz'
        }
    ])

    const [recentQuiz] = useState<Quiz[]>([
        {
            title: 'Music',
            numberOfQuestions: 10,
            duration: '1 hour 20 min',
            stars: 4.8,
            questions: [],
            color: '#f3f3f3',
            icon: 'camera',
            iconColor: 'red',
            completition: 0.2,
            description: 'Brief explanation about this quiz'
        },
        {
            title: 'Other',
            numberOfQuestions: 10,
            duration: '1 hour 20 min',
            stars: 4.8,
            questions: [],
            color: 'red',
            icon: 'star',
            iconColor: '#f2f2f2',
            completition: 0.6,
            description: 'Brief explanation about this quiz'
        }
    ])
    return (
        <View style={styles.container}>
            <Banner />
            <Space />
            <SubTitle text={"Recent Quiz"} />
            <Space />
            <Recents quiz={recentQuiz} />
            <Space />
            <SubTitle text={"Popular Quiz"} />
            <Space />
            <Popular quiz={quiz} />
        </View>
    )
}

export default Home;