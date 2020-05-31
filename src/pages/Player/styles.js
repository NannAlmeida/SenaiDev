import { StyleSheet } from 'react-native';

/**
 * Constante responsável pela estilização da página Player
 */
const Styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#000'
    },

    title: {
        color: '#fff',
        marginTop: '5%',
        fontWeight: 'bold',
        fontSize: 26,
        alignItems: 'center',
        marginBottom: '10%'
    },

    logo: {
        width: '65%',
        height: '35%',
        resizeMode: 'stretch',
        marginBottom: '2%'
    },

    player: {
        height: '35%'
    }
});

export default Styles;