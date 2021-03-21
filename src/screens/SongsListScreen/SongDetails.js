import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Strings, Style, Color } from '../../res';

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const SongDetails = (props) => {
    return (
        <View style={Style.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: props?.route?.params?.passData?.passImageURL }}
                    style={styles.imageContainer}
                />
            </View>
            <View style={[styles.imageContainer, { paddingHorizontal: 10, }]}>
                <Text style={styles.collectionNameTxt}>
                    {props?.route?.params?.passData?.passCollectionName}
                </Text>
                <Text style={styles.artistNameTxt}>
                    {Strings.ARTIST_NAME} <Text style={styles.artistNamepassed}>
                        {props?.route?.params?.passData?.passArtistName}
                    </Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        height: height / 2,
        width: width,
    },
    collectionNameTxt: {
        color: Color.primaryColor,
        fontSize: 20
    },
    artistNameTxt: {
        color: Color.primaryColor,
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 30
    },
    artistNamepassed: {
        fontSize: 20,
        fontWeight: '400'
    }
})

export default SongDetails;