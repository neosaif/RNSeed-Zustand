import React,{useEffect} from 'react';
import { ScrollView,  Button, View } from "react-native";
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { ProductCard } from './Page3.component';
import { useBoundStore } from '../../zustand/store';
import Loader from '../../components/Loader/Loader.component';

const Page3 = () => {
    // const navigation = useNavigation();
    const { addToCart, removeFromCart, cart, loading } = useBoundStore();    
    const products = useBoundStore((state) => state.products)
    const fetchData = useBoundStore((state) => state.fetch);
    useEffect(()=>{
        fetchData('?limit=1')
    },[])
    return (
        <ScrollView>
            <View style={{flex:1}}>
            {/* <Button
                title='Drawer'
                onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}
            /> */}
            <Loader enable={loading}/>
            {products && products.length ? products.map((product, index) => {
                return product.title ? (
                    <ProductCard
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    id={product.id}
                    isInCart={cart[product.id] !== undefined}
                    onRemove={removeFromCart}
                    onAdd={addToCart}
                    />
                ) : null;
            }):null}
            </View>
        </ScrollView>
    );
};

export default Page3;