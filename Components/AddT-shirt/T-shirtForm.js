import React,{useState,useContext} from "react";
import OrderContext from "../../Store/order-context";
import "./CandyForm.css"


const CandyForm=()=>{

    const CandyCtx= useContext(OrderContext)
    const [enteredId,setEnteredId]=useState('')
    const [enteredName,setEnteredName]=useState('')
    const [enteredDescription,setEnteredDescription]=useState('')
    const [enteredPrice,setEnteredPrice]=useState('')
        
    const NameChangeHandler=(event)=>{
        setEnteredName(event.target.value)
    }

    const DescriptionChangeHandler=(event)=>{
        setEnteredDescription(event.target.value)
    }

    const PriceChangeHandler=(event)=>{
        setEnteredPrice(event.target.value)
    }

    const IdChangeHandler=(event)=>{
        setEnteredId(event.target.value)
    }

    const SubmitHandler=(event)=>{

        event.preventDefault()
        const order={
            id: enteredId,
            name: enteredName,
            price: enteredPrice,
            description: enteredDescription
        }
        fetch(`https://react-http-333ab-default-rtdb.asia-southeast1.firebasedatabase.app/Products/${order.id}.json`,{
            method: 'POST',
            body: JSON.stringify(order)
        })
        CandyCtx.AddCandy({...order, L: 0, M: 0, S: 0, amount: 0})
        setEnteredName('')
        setEnteredPrice('')
        setEnteredDescription('')
    }



    return(
     <React.Fragment>
        <form onSubmit={SubmitHandler} className="form">
            <div>
                <label htmlFor="id">Id:</label>
                <input id="id" type="number" value={enteredId} onChange={IdChangeHandler} />
            </div>
            <div>
                <label htmlFor="name">T-shirt Name:</label>
                <input id="name" type="text" value={enteredName} onChange={NameChangeHandler} />
            </div>
            <div>
                <label htmlFor="description">description:</label>
                <input id="description" type="text" value={enteredDescription} onChange={DescriptionChangeHandler} />
            </div>
            <div>
                <label htmlFor="price">T-shirt Price (in Rs):</label>
                <input id="price" type="number" value={enteredPrice} onChange={PriceChangeHandler} />
            </div>
            <button type="submit">Add T-shirt</button>
     </form>
    
     </React.Fragment>
        
    )
}

export default CandyForm
