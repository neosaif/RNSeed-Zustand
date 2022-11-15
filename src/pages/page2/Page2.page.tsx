import React,{useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { page2Styles } from './Page2.style';
import { useBoundStore } from '../../zustand/store';
interface Props {

}

const Page2 = (props: Props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useBoundStore()

    const userLogin = () => {
        const body = {
            username: username,
            password: password
        }
        login(body);
    }
    return (
        <View style={page2Styles.container}>
            <Text>Login</Text>
            <Text>Username: donero</Text> 
            <TextInput
                style={page2Styles.textInput}
                value={username}
                onChangeText={setUsername}
                placeholder='Username'/> 
            <Text>Password: ewedon</Text> 
            <TextInput
                style={page2Styles.textInput}
                value={password}
                onChangeText={setPassword}
                placeholder='Password'/> 
            <Button
                title='Login'
                onPress={()=>userLogin()}
                />
        </View>
    );
};

export default Page2;
