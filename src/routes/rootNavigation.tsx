
import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Page1 from '../pages/page1/Page1.page';
import Page2 from '../pages/page2/Page2.page';

import TabNavigation from './tabNavigation';
import DrawerNavigation from './drawerNavigation';

const Stack = createNativeStackNavigator();
const navigationRef = useNavigationContainerRef(); 

export const RootNavigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='Page1'>
                <Stack.Screen name='Initial Screen' component={Page1}/>
                <Stack.Screen name='Login Screen' component={Page2}/>
                {/* <Stack.Screen name='TabNavigation' component={TabNavigation} options={{ headerShown: false }}/> */}
                <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export function navigate(name:string, params?:object) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
}