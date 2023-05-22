import { StyleSheet } from 'react-native';
import { Card, IconButton, ProgressBar } from 'react-native-paper';
import { RecentCardPropd } from '../types';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        gap: 10
    },
    card: {
        flex: 1, backgroundColor: '#FAFAFD'
    },
    iconButton: {
        borderRadius: 10,
        backgroundColor: '#fff'
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
        fontWeight: "600"
    },
})

const RecentCard = ({ quiz }: RecentCardPropd) => {
    return (
        <Card style={styles.card} mode="contained">
            <Card.Content>
                <IconButton iconColor={quiz.iconColor} style={styles.iconButton} mode='contained' icon={quiz.icon} size={20} />
            </Card.Content>
            <Card.Title titleStyle={styles.title}
            subtitleStyle={styles.subtitle} title={quiz.title} subtitle={`You completed ${(quiz.completition * 100)}%`} />
            <Card.Content>
                <ProgressBar progress={quiz.completition} color={quiz.iconColor} />
            </Card.Content>
        </Card>
    )
}

export default RecentCard