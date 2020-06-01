import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import Styles from './styles';
import Logo from '../../assets/logo.png';
import Api from '../../../services/Api';

/**
 *  Função responsável por listar em tela todos os vídeos da playlist
 * 
 * @param {object} params 
 */
export default function Playlist({ navigation, route }) {

    // Parametros passados do controller 
    const idSubject = route.params.id;

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        (async function getPlaylist(){
            const playlistDatas = (await Api.get('/playlist/' + idSubject )).data;

            const arrayVideos = playlistDatas.items;

            const videosObject = [];
            for(let index = 0; index < arrayVideos.length; index++) {
                const dataVideo = arrayVideos[index].snippet;

                const titleVideo = dataVideo.title;
                const channelName = dataVideo.channelTitle;
                const thumbnail = dataVideo.thumbnails.default.url;
                const videoId = dataVideo.resourceId.videoId;

                videosObject.push({
                    id: index.toString(),
                    title: titleVideo,
                    channel: channelName,
                    thumbVideo: thumbnail,
                    videoId: videoId
                });
            }

            setVideos(videosObject);
        })();
    }, []);

    return (
        <View style={Styles.body}>
            <Image source={Logo} style={Styles.logo} />
            <Text style={Styles.title}>Playlist</Text>
            <FlatList style={Styles.list} data={videos} keyExtractor={videos => videos.id} renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => { navigation.navigate('Player', { videoId: item.videoId, title: item.title }) }} style={Styles.videoButton}>
                        <Image source={{ uri: item.thumbVideo }} style={Styles.thumb} />
                        <Text style={Styles.titleVideo}>{ item.title }</Text>
                        <Text style={Styles.channelName}>{ item.channel }</Text>
                    </TouchableOpacity>
                );
            }} />
        </View>
    );
}