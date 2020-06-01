import Axios from 'axios';

/**
 *  Constante responsável por ter a base da URL para o acesso na API.
 */
const Api = Axios.create({
    baseURL: 'http://192.168.1.102:3000'
});

export default Api;