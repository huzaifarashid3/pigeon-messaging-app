import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import MainScreen from './main_screen'
import { Redirect } from 'expo-router'

const Root = () => {
    return (
        <Redirect href="/main_screen" />
    )
}

export default Root;