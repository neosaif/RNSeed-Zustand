
import { StateCreator } from 'zustand'
import { CartState } from '../../interfaces';
import { getProductList } from "../../api/services";

export const selectProductsInCart = (state: CartState) =>
  state.products.filter((product) => state.cart[product.id]);

export const createCartSlice: StateCreator<CartState> = (set) => ({
    loading: false,
    products: [],
    cart: {},
    fetch: async (query: string) => {
        set(() => ({ loading: true }));
        try {
            const response = await getProductList(query)
            set(
                (state) => {return { products: [state.products, ...response.data], loading: false }},
                false,
                "cartSlice/productFetching/success"
            );
        } catch (err) {
            set(
                () => ({ loading: false }),
                false,
                "cartSlice/productFetching/failed"
            );
            console.warn('err');
        }
    },
    addToCart: (id: number) =>
        set(
            (state) => ({ cart: { ...state.cart, [id]: 1 } }),
            false,
            'cartSlice/addToCart' // a name for the action to log in debugger
        ),
    removeFromCart: (id: number) =>
        set(
            (state) => {const nextCart = { ...state.cart };
            delete nextCart[id];
            return { cart: nextCart };},
            false,
            'cartSlice/removeFromCart'
        ),
})

