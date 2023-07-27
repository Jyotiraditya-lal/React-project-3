import React,{useState} from "react";
import OrderContext from "./order-context";

const OrderProvider=(props)=>{

    const [CandyState,setCandyState]=useState([])
    

    const AddCandyHandler=(candy)=>{
        setCandyState([...CandyState,candy])
    }

    const AddLHandler=(id)=>{
        for(let i=0;i<CandyState.length;i++){
            if(CandyState[i].id===id){
                CandyState[i].amount++
                CandyState[i].L++;
                setCandyState([...CandyState])
                break;
            }
            
        }
        
    }

    const AddMHandler=(id)=>{
        for(let i=0;i<CandyState.length;i++){
            if(CandyState[i].id===id){
                CandyState[i].amount+
                CandyState[i].M++;
                setCandyState([...CandyState])
                break;
            }
        }
    }

    const AddSHandler=(id)=>{
        for(let i=0;i<CandyState.length;i++){
            if(CandyState[i].id===id){
                CandyState[i].amount++;
                CandyState[i].S++;
                setCandyState([...CandyState])
                break;
            }
        }
    }


    const order={
        candy: CandyState,
        AddCandy: AddCandyHandler,
        AddbyOne: AddLHandler,
        AddbyTwo: AddMHandler,
        AddbyThree: AddSHandler
    }


    return(
        <OrderContext.Provider value={order}>
            {props.children}
        </OrderContext.Provider>

    )
} 

export default OrderProvider
