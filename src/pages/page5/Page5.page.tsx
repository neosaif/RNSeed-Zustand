import React from 'react';
import {View, Text, Button} from 'react-native';
import { page5Styles } from './Page5.style';
import { useBoundStore } from '../../zustand/store';
interface Props {}

const Page5 = (props: Props) => {
    const {bears, increase } = useBoundStore()
    return (
        <View style={page5Styles.container}>
            <Text>Bears Count: {bears}</Text>  
            <Button
                title='Add bear'
                onPress={()=>increase(1)}
            />
        </View>
    );
};

export default Page5;
