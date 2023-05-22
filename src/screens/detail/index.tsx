import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {  Title, Space, QuizResume, CardResume, Advertising, CustomButton } from '../../components';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
      paddingHorizontal: 24,
      paddingTop: 34
    },
    buttonContainer:{ 
      paddingTop: 30
    } 
  });
  

const Detail = ({ route }) => {
  const navigation = useNavigation();
  const [quiz] = useState(route.params.quiz)
  return (
      <View style={styles.container}>
          <QuizResume quiz={quiz} />
          <Title text={quiz.description} fontWeight='bold' />
          <Space />
          <CardResume {...quiz} icon="clock" title={`${quiz.numberOfQuestions} Question`} rightIcon={false} />
          <CardResume {...quiz} icon="file-document" title={`${quiz.numberOfQuestions} Question`} rightIcon={false} />
          <Title text="Please read the text below carefully so you can understand it" fontWeight='bold' />
          <Advertising />
          <View style={styles.buttonContainer}>
            <CustomButton onPress={() => navigation.navigate('Questions', { quiz: quiz })} text='Get Started' />
          </View>
      </View>
  )
}

export default Detail;