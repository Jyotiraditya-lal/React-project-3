import React,{useContext} from "react";



const CandyItems=(props)=>{

    

    return(
        <React.Fragment>
            <div>
                {props.name}-{props.description}-Rs{props.price}
            </div>
            <button onClick={props.onAddL}>Buy L {(props.NumberL)} </button>
            <button onClick={props.onAddM}>Buy M {(props.NumberM)} </button>
            <button onClick={props.onAddS}>Buy S {(props.NumberS)} </button>
        </React.Fragment>
    )
}

export default CandyItems
