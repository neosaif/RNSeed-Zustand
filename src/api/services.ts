import {request} from "./index"
import { LoginCred } from "../interfaces"

export const userLogin = async (body:LoginCred) => request.post(`/auth/login`, body)

export const getProductList = async (query:string) => request.get(`/products?${query}`)
