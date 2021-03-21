import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {SongListComponent} from '../../component'

const SongsListScreen=(props)=>{

    return(
        <View style={styles.container}>
            <SongListComponent
                {...props} 
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
    }
})

export default SongsListScreen;