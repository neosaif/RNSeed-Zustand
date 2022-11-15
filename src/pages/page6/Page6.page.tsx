import React from 'react';
import {View, Text} from 'react-native';
import { page6Styles } from './Page6.style';

interface Props {}

const Page6 = (props: Props) => {
    return (
        <View style={page6Styles.container}>
            <Text>Page6</Text>  
        </View>
    );
};

export default Page6;
