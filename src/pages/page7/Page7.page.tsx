import React from 'react';
import {View, Text} from 'react-native';
import { page7Styles } from './Page7.style';

interface Props {}

const Page7 = (props: Props) => {
    return (
        <View style={page7Styles.container}>
            <Text>Page7</Text>  
        </View>
    );
};

export default Page7;
