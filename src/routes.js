import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Player from './pages/Player';

const Stack = createStackNavigator();

/**
 *  Função responsável por criar as rotas de navegação entre telas
 * 
 * @returns Renderiza a navegação entre os componentes
 */
export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Playlist' component={Playlist} />
                <Stack.Screen name='Player' component={Player} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}