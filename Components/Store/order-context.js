import React from "react"

const OrderContext=React.createContext({
    candy: [],
    AddCandy: (candy)=>{},
    AddbyOne: (id)=>{},
    AddbyTwo: (id)=>{},
    AddbyThree: (id)=>{}
})

export default OrderContext
