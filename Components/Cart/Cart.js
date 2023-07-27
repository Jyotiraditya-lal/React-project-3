import React,{useContext} from "react";
import OrderContext from "../../Store/order-context";
import Modal from "../UI/Modal";

const Cart=(props)=>{

    const CandyCtx=useContext(OrderContext)
    const CartItems= <ul>{CandyCtx.candy.map(Candy=>
                                   <li key={Candy.id} className="items">
                                    Name:{Candy.name}, Price:{Candy.price}, {Candy.L}L, {Candy.M}M, {Candy.S}S
                                   </li>
        
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
