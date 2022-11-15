import React from 'react';
import {View, Text, Button} from 'react-native';
import { page1Styles } from './Page1.style';
import { useNavigation } from '@react-navigation/native';
import { useBoundStore } from '../../zustand/store';
interface Props {}

const Page1 = (props: Props) => {
    const navigation = useNavigation();
    const { logged } = useBoundStore();
    return (
        <View style={page1Styles.container}>
            <Text>InitialScreen</Text>  
            {logged ? 
            <Button
                title='Home'
                onPress={()=>navigation.navigate('DrawerNavigation')}
                />
            : <Button
                title='Login'
                onPress={()=>navigation.navigate('Login Screen')}
            />}
        </View>
    );
};

export default Page1;
