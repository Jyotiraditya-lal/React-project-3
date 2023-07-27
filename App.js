import React,{useState} from 'react';
import OrderProvider from './Store/OrderProvider';
import CandyForm from './Components/Candy/CandyForm';
import CandyList from './Components/Candy/CandyList';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';

function App() {

  const [ShowCart,setShowCart]=useState(false)

  const ShowCartHandler=()=>{
    setShowCart(true)
  }

  const CancelCartHandler=()=>{
    setShowCart(false)
  }
  

  return(
    <OrderProvider>
     <header>
         <Header onDisplay={ShowCartHandler} />
     </header>
     <main>
        <CandyForm />
        <CandyList />
     </main>
     {ShowCart && <Cart onCancel={CancelCartHandler} />}
    </OrderProvider>
  )
  
}

export default App;
