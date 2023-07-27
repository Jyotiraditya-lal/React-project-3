import React from "react";


const CandyItems=(props)=>{


    return(
        <React.Fragment>
            <div>
                {props.name}-{props.description}-Rs{props.price}
            </div>
            <button onClick={props.onAddL}>Buy L</button>
            <button onClick={props.onAddM}>Buy M</button>
            <button onClick={props.onAddS}>Buy S</button>
        </React.Fragment>
    )
}

export default CandyItems
