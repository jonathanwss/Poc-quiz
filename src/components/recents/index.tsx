import React from 'react'
import { View, StyleSheet } from 'react-native'
import RecentCard from './recentCard'
import { RecentsProps } from './types'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        gap: 10
    },
})


const Recents = ({ quiz }: RecentsProps) => {
    return (
        <View style={styles.container}>
            {
                quiz.map(x => {
                    return (
                        <RecentCard quiz={x} />
                    )
                })
            }
        </View>
    )
}

export default Recents