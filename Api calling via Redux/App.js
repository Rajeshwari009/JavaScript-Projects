import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './Store/uiSlice';
import { Fragment } from 'react';
import Notification from './components/UI/Notification';



let isInitial=true

function App() {
  const dispatch=useDispatch()
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification=useSelector(state=>state.ui.notification)
 
  useEffect(()=>{
    
   const sendCartData=async ()=>{

    dispatch(uiActions.showNotification({status:'pending',title:'sending..',message:'senidng cart data',}))

    
const response= await fetch('https://expense1-a807b-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
      body:JSON.stringify({cart}),
      headers:{'Content-Type':'application/json'}
    })
    if(!response.ok){
      throw new Error('Sending cart data failed')
    }
    const responseData=await response.json()
    console.log(responseData)

    dispatch(uiActions.showNotification({status:'success',title:'success!',message:'sent cart data successfully!',})
   ) }

   if(isInitial){
    isInitial=false
    return
   }

   sendCartData().catch(error=>{
    dispatch(uiActions.showNotification({status:'error',title:'Error!',message:'sending cart data failed!',}))
   })
  },[cart,dispatch])
  return (
    <Fragment>
     {notification &&( 
     <Notification
     status={notification.status}
     title={notification.title}
     message={notification.message}
     
     />)}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;