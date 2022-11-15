export interface BearState {
    bears: number
    increase: (by: number) => void
}

export interface FishSlice {
    fishes: number
    addFish: () => void
}

export interface ICartRow {
    title: string;
    image: string;
    id: number;
    onRemove: (id: number) => void;
};


export interface IProductCard {
    title: string;
    image: string;
    id: number;
    isInCart: boolean;
    onRemove: (id: number) => void;
    onAdd: (id: number) => void;
};


export type Product = {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

export interface CartState {
  loading: boolean;
  products: Product[];
  cart: { [id: number]: number };
  fetch: (query : string) => void;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

export type User = {
    id: number,
    email: string,
    username:string,
    password:string,
    name:{
        firstname:string,
        lastname:string
    },
    address:{
        city:string,
        street:string,
        number:number,
        zipcode:string,
        geolocation:{
            lat:string,
            long:string
        }
    },
    phone:string
}

export interface LoginCred {
    username: string;
    password: string;
}

export interface UserState {
    loading: boolean;
    logged: boolean;
    token: string;
    userdetails: User;
    login : (body: LoginCred) => void;
    getdetails : (id: string) => void;
}


export interface Store extends 
    CartState, 
    UserState, 
    BearState
    {} // you can extend the types used in store here and use it in create store funtion
