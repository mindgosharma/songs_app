import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SongsListScreen, SongDetails } from '../../screens/SongsListScreen';
import { Strings } from '../../res';


const songsListStack = createStackNavigator()

const SongsListStackScreen = (navigation) => {

    return (

        <songsListStack.Navigator
            initialRouteName={"SongsListScreen"}
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#0099cc'
                },
            }}

        >
            <songsListStack.Screen
                name='SongsListScreen'
                component={SongsListScreen}
                options={({ navigation }) => ({
                    title: Strings.SONGS,
                    headerTitleAlign: 'center',
                    headerTintColor: '#ffff'
                })}
            />
            <songsListStack.Screen
                name='SongDetails'
                component={SongDetails}
                options={({ navigation }) => ({
                    title: Strings.SONG_DETAILS,
                    headerTitleAlign: 'center',
                    headerTintColor: '#ffff'
                })}
            />
        </songsListStack.Navigator>
    )
}

export default SongsListStackScreen;

