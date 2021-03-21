import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

const LoaderComponent=(props)=>{
   
    return(
        <View style={styles.container}>
             <ActivityIndicator size="large" color='#0099cc'/>
             <Text style={{ color:'#0099cc', fontSize: 14, textAlign: 'center'}}>Please wait</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    }
})

export default LoaderComponent;