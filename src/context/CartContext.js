import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const CartContext= createContext();

export const CartProvider=({children})=>{
    const[carts,setCarts]= useState([]);
    const[totalPrice,setTotalPrice]=useState(0);

    useEffect(()=> {loadCartItems();}, []);

    const loadCartItems=async()=>{
        let carts= await AsyncStorage.getItem("carts");
        carts= carts? JSON.parse(carts) : [];
        setCarts(carts);
        totalSum(carts);
    }
    const addToCart= async (item)=>{
        const itemExist=carts.findIndex((cart)=>cart.id===item.id);
        if(itemExist=== -1){
            const newCartItems=[...carts,item];
            await AsyncStorage.setItem("carts",JSON.stringify(newCartItems));
            setCarts(newCartItems);
            totalSum(newCartItems);
        }
    }
    const deleteItem= async(item)=>{
        const newItems= carts.filter((cart) => cart.id !==item.id);
        setCarts(newItems);
        await AsyncStorage.setItem("carts",JSON.stringify(newItems));
        totalSum(newItems);
    };
    const totalSum=(carts)=>{
        const totalSum= carts.reduce((amount,item)=> amount+item.price,0);
        setTotalPrice(totalSum);
    }
    const value={
        carts,
        addToCart,
        totalPrice,
        deleteItem,
    };
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
};