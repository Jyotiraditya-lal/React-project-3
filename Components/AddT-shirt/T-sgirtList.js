import React,{useContext} from "react";
import OrderContext from "../../Store/order-context";
import CandyItems from "./CandyItems";

const CandyList=()=>{

    const CandyCtx=useContext(OrderContext)

    const AddLHandler=(id)=>{
        CandyCtx.AddbyOne(id)
    }

    const AddMHandler=(id)=>{
        CandyCtx.AddbyTwo(id)
    }

    const AddSHandler=(id)=>{
        CandyCtx.AddbyThree(id)
    }

    const Candylist=<ul>{CandyCtx.candy.map(Candy=>
                           <CandyItems 
                               key={Candy.id}
                               name={Candy.name}
                               description={Candy.description}
                               price= {Candy.price} 
                               onAddL={AddLHandler.bind(null,Candy.id)} 
                               onAddM={AddMHandler.bind(null,Candy.id)} 
                               onAddS={AddSHandler.bind(null,Candy.id)} 
                               NumberL={Candy.NumberL}
                               NumberM={Candy.NumberM}
                               NumberS={Candy.NumberS}
                            />
                           
                    )} 
    </ul>

    return (
        <React.Fragment>
            {Candylist}
        </React.Fragment>
    )
}

export default CandyList
