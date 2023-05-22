import React from 'react'
import { List } from 'react-native-paper';

const Advertising = () => {
    return (
        <List.Section>
            <List.Item title="10 point awarded for a correct answer and no marks for a incorrect answer" left={() => <List.Icon icon="circle-small" />} />
            <List.Item title="Tap on options to select the correct answer" left={() => <List.Icon icon="circle-small" />} />
            <List.Item title="Click submit if you are sure you want to complete all the quizzes" left={() => <List.Icon icon="circle-small" />} />
            
            
        </List.Section>
    )
}

export default Advertising