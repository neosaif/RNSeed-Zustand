

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import Page7 from '../pages/page7/Page7.page';
import Page8 from '../pages/page8/Page8.page';
import TabNavigation from './tabNavigation';


const DrawerNavigation = () => {
    return (
       <Drawer.Navigator initialRouteName='TabNavigation'>
            <Drawer.Screen name='TabNavigation' component={TabNavigation} options={{ headerShown: false }}/>
            <Drawer.Screen name='Page7' component={Page7}/>
            <Drawer.Screen name='Page8' component={Page8}/>
       </Drawer.Navigator>
    )
}

export default DrawerNavigation;