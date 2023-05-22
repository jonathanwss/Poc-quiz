import React from 'react'
import { Avatar, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { HeaderProps } from './types';
import Notify from '../../../assets/notifyIcon'
import BackIcon from '../../../assets/backIcon'
import DotsIcon from '../../../assets/dotsIcon'

const Header = ({ title, goBack = false }: HeaderProps) => {
    const navigation = useNavigation()
    return (
        <>
        <Appbar.Header mode="small">
            {
                goBack ?
                <Appbar.Action icon={() => <BackIcon />} onPress={() => navigation.goBack()} />
                :
                <Appbar.Action icon={() => <Avatar.Text size={28} label="JS" />} />
            }
            
            <Appbar.Content title={title} />
            {
                goBack ?
                <Appbar.Action icon={() => <DotsIcon />} />
                :
                <Appbar.Action icon={() => <Notify />} />
            }
        </Appbar.Header>
            
        </>
    )
}

export default Header