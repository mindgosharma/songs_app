import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import { LoaderComponent } from '../component'
import {URL, Strings, Style, Color} from '../res';


const SongListComponent = (props) => {

    const [songList, setSongList] = React.useState([])
    const [refreshing, setRefreshing] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        fetchSongList()
    }, [])


    //This method is used for pull to refresh
    const handleRefresh = () => {
        fetchSongList()
    }


    //This method is used for fetching songslist
    const fetchSongList = async () => {
        setIsLoading(true)
        fetch(URL.songListApi)
            .then(response => response?.json())
            .then(response => {
                setSongList([songList, ...response?.results])
                setIsLoading(false)
            }).catch((error) => {
                console.log("sonList api error", error)
                setIsLoading(false)
            })

    }

    const renderSongList = (item, index) => {
        return (
            <TouchableOpacity
                onPress={() => props.navigation.navigate("SongDetails", { passData: { passImageURL: item?.artworkUrl60, passCollectionName: item?.collectionName, passArtistName: item?.artistName } })}
                activeOpacity={1}
                style={styles.touchableView}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: item?.artworkUrl60 }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.collectionNameTxt}>{item?.collectionName}</Text>
                    <Text style={styles.artistNameTxt}>{Strings.ARTIST_NAME}   <Text style={{ fontSize: 12, fontWeight: '400' }}>{item?.artistName}</Text></Text>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <View style={Style.container}>
            {
                isLoading
                    ?
                    <LoaderComponent />
                    :
                    <FlatList
                        data={songList}
                        renderItem={({ item, index }) => renderSongList(item, index)}
                        keyExtractor={(item, index) => index.toString()}
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />}
        </View>
    )
}

const styles = StyleSheet.create({
    touchableView: {
        flex: 10,
        flexDirection: 'row',
        height: 100,
        paddingVertical: 10,
        paddingHorizontal: 12,
        alignItems: 'center'
    },
    image: {
        height: 80,
        width: 80
    },
    imageContainer: {
        flex: 3
    },
    txtContainer: {
        flex: 7
    },
    collectionNameTxt: {
        color: Color.primaryColor,
        fontSize: 14
    },
    artistNameTxt: {
        color: Color.primaryColor,
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 20
    }
})

export default SongListComponent;