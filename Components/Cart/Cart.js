import React,{useContext} from "react";
import OrderContext from "../../Store/order-context";
import Modal from "../UI/Modal";
import CartList from "./CartItems";


const Cart=(props)=>{

    const removeHandler=(id)=>{
        CandyCtx.RemoveItems(id)
    }


    const CandyCtx=useContext(OrderContext)
    const CartItems= <ul>{CandyCtx.candy.map(Candy=>
                               <CartList 
                                    key={Candy.id}
                                    name={Candy.name}
                                    price={Candy.price}
                                    L={Candy.L}
                                    M={Candy.M}
                                    S={Candy.S}
                                    onRemove={removeHandler.bind(null,Candy.id)} 
                                />    
        
        )}</ul>

    let totalAmount=0
    for(let i=0;i<CandyCtx.candy.length;i++){
        totalAmount=totalAmount+((CandyCtx.candy[i].price)*(CandyCtx.candy[i].amount))
    }

   
   
    return(
        <Modal>
            {CartItems} 
            <div className="total"> Total Amount: Rs {totalAmount}</div>
            <button onClick={props.onCancel}>Cancel</button>
            <button>Order </button>
        </Modal>
    )
}

export default Cart
