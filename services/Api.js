import Axios from 'axios';

/**
 *  Constante responsável por ter a base da URL para o acesso na API.
 */
const Api = Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});

export default Api;