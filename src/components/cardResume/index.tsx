import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { CardResumeProps } from './types';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginBottom: 20
    },
    subtitle: {
        color: '#999999',
        fontSize: 12, 
        fontWeight: "400", 
        lineHeight: 16
    },
    title: {
        color: '#333333', 
        fontSize: 14, 
        lineHeight: 17, 
        fontWeight: "bold",
        fontFamily: "Montserrat-Semibold"
    },
    rightIcon: {
        alignItems: 'center', 
        flexDirection: 'row', 
        paddingRight: 10
    }
})

const CardResume = ({ color, iconColor, icon, stars, title, numberOfQuestions, rightIcon = true }: CardResumeProps) => {
    const navigation = useNavigation();
    const LeftIcon = () => <IconButton iconColor={iconColor} icon={icon} mode='contained' style={{ backgroundColor: color, borderRadius: 10 }} />
    const RightIcon = () => <View style={styles.rightIcon}><IconButton icon='star' size={20} iconColor="#F2C94C" /><Text>{stars}</Text></View>

    return (
            <Card style={styles.card}>
                <Card.Title 
                    subtitleStyle={styles.subtitle} 
                    titleStyle={styles.title} 
                    title={title} 
                    subtitle={`${numberOfQuestions} Question`}
                    left={LeftIcon} 
                    right={rightIcon ? RightIcon : () => <></>} />
            </Card>
    )
}

export default CardResume