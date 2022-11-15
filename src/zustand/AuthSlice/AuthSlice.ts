
import { StateCreator } from 'zustand'
import { UserState, LoginCred } from "../../interfaces";
import { userLogin } from "../../api/services";
import { navigate } from "../../routes/rootNavigation";

export const createAuthSlice: StateCreator<UserState> = (set) => ({
    loading: false,
    logged: false,
    token: '',
    userdetails: {
        id: 0,
        email: '',
        username:'',
        password:'',
        name:{
            firstname:'',
            lastname:''
        },
        address:{
            city:'',
            street:'',
            number:0,
            zipcode:'',
            geolocation:{
                lat:'',
                long:''
            }
        },
        phone:''
    },
    login: async (body: LoginCred) => {
        set(() => ({ loading: true }));
        try {
            const response = await userLogin(body)
            if(response.status === 200){
                console.warn('loginSuccess');
                set(
                    (state) => {return { logged: true, token:response.data.token, loading: false }},
                    false,
                    "authSlice/loginSuccess" // a name (type) for action 
                );
                navigate('DrawerNavigation')
            }else{
                console.warn('loginFailed');
                set(
                    (state) => {return {loading: false }},
                    false,
                    "authSlice/loginFailed"
                );
            }
            
        } catch (err) {
            set(() => ({ loading: false }));
            console.warn('loginFailed');
        }
    },
    getdetails: async (id: string) => {
        set(() => ({ loading: true }));
        try {
            
        } catch (err) {
            set(() => ({ loading: false }));
            console.warn('err');
        }
    }
})

