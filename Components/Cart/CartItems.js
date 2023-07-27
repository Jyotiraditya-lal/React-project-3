import React from "react";


const CartList=(props)=>{


    return(
        <React.Fragment>
            <div>
             Name:{props.name}, Price:{props.price}, {props.L}L, {props.M}M, {props.S}S
             <button onClick={props.onRemove}>Remove</button>
            </div>
        </React.Fragment>
    )
}

export default CartList
