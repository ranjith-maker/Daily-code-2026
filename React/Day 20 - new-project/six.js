/*


- Project -Shopping List (using Context API + useReducer)

1. Preparing the basic structure of app
Svg  - Support vector Graphics, they compute the img , when you go to big screen or small screen, it wont pixel it .
function addQuant(itemId) {

const newItems = shoppingItems.map(item =>

  item.id === itemId ?
  {...item, quantity : item.quantity + 1} :
   item 
)
setshoppingItems(newItems)

return newItems

}

function subQuant(itemId){

  const newItem = shoppingItems.map(item=>

    item.id === itemId ? 
    {...item, quantity: item.quantity -  1  } : 
    item
  )
   .filter(item => item.quantity > 0   )

setshoppingItems(newItem)

}

3. Adding reducers using useReducer

import React from 'react'
import { v4 as uuidv4  } from 'uuid'


 function ShopReducer(shoppingItems, action ) {

  switch(action.type){
    
    case'ADD_ITEM':
    
  const itemObj ={
     quantity : 1,
     name : action.payload.name,
     id :uuidv4() 
  }
 return [...shoppingItems, itemObj ]

case 'INC_ITEM':
  return shoppingItems.map(item =>
    item.id === action.payload.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );

case 'DEC_ITEM':
  return shoppingItems
    .map(item =>
      item.id === action.payload.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter(item => item.quantity > 0);


default:
  return shoppingItems
 
  }

}


export default ShopReducer


function Item({item, dispatch  }) {
function handleInc() {
  
dispatch({ type : 'INC_ITEM'  , payload : {id : item.id  }})
}
function handleDec() {
dispatch({ type :'DEC_ITEM', payload : {id : item.id}  })}

  return (
 <>
 <div className='itemWrap'      >  
 <div> {item.name}  </div>

 <button  className='eachBtn add'
 onClick={handleInc}

 >   <i className ="ri-add-large-fill"></i>  </button>

 <div> {item.quantity}  </div>

 <button  className='eachBtn remove'
onClick={()=>{

  if( item.quantity === 1 ){
  showError(`${item.name} is removed from cart `)
 }
handleDec()
}}
 > <i className ="ri-subtract-fill"></i>  </button>
  </div>
 </> 
)}
export default  Item


*/