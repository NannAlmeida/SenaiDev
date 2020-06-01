import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import Styles from './style';
import Logo from '../../assets/logo.png';
import Api from '../../../services/Api'

/**
 * Função que constrói a página principal onde contém as matérias
 * 
 * @param {object} params 
 */
export default function Home({ navigation }) {
    
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        (async function getSubjects() {
            const subjectsDatas = (await Api.get('/subjects')).data;
            const subjectsArray = [];

            for(let index = 0; index < subjectsDatas.length; index++) {
                const subject = subjectsDatas[index];

                subjectsArray.push({
                    id: subject.id.toString(),
                    name: subject.name
                });
            }

            setSubjects(subjectsArray);
        })();
    }, []);

    return (
        <View style={Styles.body}>
            <Image source={Logo} style={Styles.logo} />
            <Text style={Styles.title}>Disciplinas</Text>
            <FlatList style={Styles.list} data={subjects} keyExtractor={subject => subject.id} renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => { navigation.navigate('Playlist', { id: item.id }); }} style={Styles.categoryButton}>
                        <Text style={Styles.titleButtonCategory}>{ item.name }</Text>
                    </TouchableOpacity>
                );
            }} />
        </View>
    );
}