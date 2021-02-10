import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import ScreenNavigation from './ScreenNavigation';


const ContainerNavigation= () =>{
    return <NavigationContainer>
        <ScreenNavigation/>
    </NavigationContainer>
}

export default ContainerNavigation;