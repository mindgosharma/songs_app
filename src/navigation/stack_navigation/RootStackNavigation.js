import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SongsListStack } from './index'


const RootStack = createStackNavigator()

const RootStackNavigation = (props)=> {

    return (

        <RootStack.Navigator
            headerMode="none"
        >  
            <RootStack.Screen name='SongsListStack' component={SongsListStack} />
        </RootStack.Navigator>
    )
}

export default RootStackNavigation;

