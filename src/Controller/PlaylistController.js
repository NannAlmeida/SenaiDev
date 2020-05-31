import { AsyncStorage } from 'react-native';

import Api from '../../services/Api';


/**
 * Função que verifica o tamanho da playlist
 * 
 * @param {string} playlistId 
 * @param {string} apiKey
 * @returns A quantidade de videos que a playlist tem
 */
async function getTotalVideos(playlistId, apiKey) {
    const getPlaylistTotalSize = (await Api.get(`/playlistItems?playlistId=${playlistId}&key=${apiKey}`).catch((err) => console.log(`Falha ao se conectar, status: ${err}`))).data;

    // Quantidade de vídeos que contém na playlist
    const playlistSize = getPlaylistTotalSize.pageInfo.totalResults;

    return playlistSize;
}

/**
 * Função responsável por pegar todos os dados da playlist
 * 
 * @param {string} playlistId 
 * @param {object} navigation 
 */
export default async function getDatasPlaylist(playlistId, navigation) {
    const apiKey = "AIzaSyDzfFqkp9bRBGCBwYgttaHuXFGqR5Nxf0g";

    // Pega a quantidade de videos que a playlist tem
    const totalVideos = await getTotalVideos(playlistId, apiKey);

    const requestGetDataPlaylist = (await Api.get(`/playlistItems?part=snippet&maxResults=${totalVideos}&playlistId=${playlistId}&key=${apiKey}`)).data;
    const arrayVideos = requestGetDataPlaylist.items;

    const videos = [];

    for(let index = 0; index < arrayVideos.length; index++) {
        const dataVideo = arrayVideos[index].snippet;

        const titleVideo = dataVideo.title;
        const channelName = dataVideo.channelTitle;
        const thumbnail = dataVideo.thumbnails.default.url;
        const videoId = dataVideo.resourceId.videoId;

        videos.push({
            id: index.toString(),
            title: titleVideo,
            channel: channelName,
            thumbVideo: thumbnail,
            videoId: videoId,
            key: apiKey
        });
    }

    navigation.navigate('Playlist', {
        headers: null,
        videosList: videos
    });
}