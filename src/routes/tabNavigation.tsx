

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Page3 from '../pages/page3/Page3.page';
import Page4 from '../pages/page4/Page4.page';
import Page5 from '../pages/page5/Page5.page';
import Page6 from '../pages/page6/Page6.page';

const TabNavigation = () => {
    return (
       <Tab.Navigator initialRouteName='Page3'>
            <Tab.Screen name='Products' component={Page3}/>
            <Tab.Screen name='Cart' component={Page4}/>
            <Tab.Screen name='Page5' component={Page5}/>
            <Tab.Screen name='Page6' component={Page6}/>
       </Tab.Navigator>
    )
}

export default TabNavigation;