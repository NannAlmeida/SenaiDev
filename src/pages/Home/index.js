import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import Styles from './style';
import Logo from '../../assets/logo.png';
import Subjets from '../../data/subjects.json';
import getDatasPlaylist from '../../Controller/PlaylistController';

/**
 * Função que constrói a página principal onde contém as matérias
 * 
 * @param {object} params 
 */
export default function Home({ navigation }) {
    return (
        <View style={Styles.body}>
            <Image source={Logo} style={Styles.logo} />
            <Text style={Styles.title}>Disciplinas</Text>
            <FlatList style={Styles.list} data={Subjets} keyExtractor={subjects => subjects.id} renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => { getDatasPlaylist(item.playlistId, navigation) }} style={Styles.categoryButton}>
                        <Text style={Styles.titleButtonCategory}>{ item.name }</Text>
                    </TouchableOpacity>
                );
            }} />
        </View>
    );
}