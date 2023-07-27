import React,{useContext} from "react";
import OrderContext from "../../Store/order-context";
import "./Header.css"

const Header=(props)=>{


    const CandyCtx=useContext(OrderContext)

    let number=0;
    for(let i=0;i<CandyCtx.candy.length;i++){
        number=number+ Number(CandyCtx.candy[i].amount)
    }

    

    return(
        <div className="hadBttn">
            <button className="button" onClick={props.onDisplay}>
                <span>Cart</span>
                <span>({number})</span>
            </button>
        </div>
    )
}

export default Header
