import React,{useState} from "react";
import OrderContext from "./order-context";

const OrderProvider=(props)=>{

    const [CandyState,setCandyState]=useState([])
    //
    

    const AddCandyHandler=(candy)=>{
        setCandyState([...CandyState,candy])
    }

    const AddLHandler=(id)=>{
        for(let i=0;i<CandyState.length;i++){
            if(CandyState[i].id===id){
                if(CandyState[i].NumberL>0) {
                    CandyState[i].amount++
                    CandyState[i].L++;
                    CandyState[i].NumberL--;
                    setCandyState([...CandyState])
                    break;
                }
                else{
                    alert(`No More ${CandyState[i].name} available in L-size`)
                }
            }
            
        }
        
    }

    const AddMHandler=(id)=>{
        for(let i=0;i<CandyState.length;i++){
            if(CandyState[i].id===id){
                if(CandyState[i].NumberM>0){
                    CandyState[i].amount+
                    CandyState[i].M++;
                    CandyState[i].NumberM--;
                    setCandyState([...CandyState])
                break;
                }
                else{
                    alert(`No More ${CandyState[i].name} available in L M-size`)
                }
                
            }
        }
    }

    const AddSHandler=(id)=>{
        for(let i=0;i<CandyState.length;i++){
            if(CandyState[i].id===id){
                if(CandyState[i].NumberS>0){
                    CandyState[i].amount+
                    CandyState[i].S++;
                    CandyState[i].NumberS--;
                    setCandyState([...CandyState])
                break;
                }
                else{
                    alert(`No More ${CandyState[i].name} available in S-size`)
                }
            }
        }
    }

    const RemoveItemsHandler=(id)=>{
        fetch(`https://react-http-333ab-default-rtdb.asia-southeast1.firebasedatabase.app/Products/${id}.json`,{
            method: 'DELETE'
        })

        for(let i=0;i<CandyState.length;i++){
            if(CandyState[i].id===id){
                CandyState.splice(i,1)
                setCandyState([...CandyState])
            }
        }
    }


    const order={
        candy: CandyState,
        AddCandy: AddCandyHandler,
        AddbyOne: AddLHandler,
        AddbyTwo: AddMHandler,
        AddbyThree: AddSHandler,
        RemoveItems: RemoveItemsHandler,
        
    }


    return(
        <OrderContext.Provider value={order}>
            {props.children}
        </OrderContext.Provider>

    )
} 

export default OrderProvider
