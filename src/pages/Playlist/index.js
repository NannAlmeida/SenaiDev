import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import Styles from './styles';
import Logo from '../../assets/logo.png';

/**
 *  Função responsável por listar em tela todos os vídeos da playlist
 * 
 * @param {object} params 
 */
export default function Playlist({ navigation, route }) {

    // Parametros passados do controller 
    const params = route.params.videosList;

    return (
        <View style={Styles.body}>
            <Image source={Logo} style={Styles.logo} />
            <Text style={Styles.title}>Playlist</Text>
            <FlatList style={Styles.list} data={params} keyExtractor={videos => videos.id} renderItem={({ item }) => {
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