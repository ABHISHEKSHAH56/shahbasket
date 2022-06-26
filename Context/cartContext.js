import React, {createContext, useState, useContext, useEffect} from 'react';



const CartContext = createContext({});

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [userAddress, setUserAddress] = useState(null)

    function getTotals()
    {
      const subtotal = cartItems.reduce((a, c) => a + c.quantity*c.basePrice, 0) 
      const tax = 0
      const deliverycharge = subtotal> 300 ? 0 : 50
      const grandTotal = subtotal + deliverycharge + tax
      return [subtotal,grandTotal,deliverycharge];
    }

    

    function getItemQuantity(id) {
        return cartItems.find(item => item._id === id)?.quantity || 0
      }
      function increaseCartQuantity(data) {
        setCartItems(currItems => {
          if (currItems.find(item => item._id === data._id) == null) {
            return [...currItems, { ...data, quantity: 1 }]
          } else {
            return currItems.map(item => {
              if (item._id === data._id) {
                return { ...item, quantity: item.quantity + 1 }
              } else {
                return item
              }
            })
          }
        })
      }
      function decreaseCartQuantity(data) {
        setCartItems(currItems => {
          if (currItems.find(item => item._id === data._id)?.quantity === 1) {
            return currItems.filter(item => item._id !== data._id)
          } else {
            return currItems.map(item => {
              if (item._id === data._id) {
                return { ...item, quantity: item.quantity - 1 }
              } else {
                return item
              }
            })
          }
        })
      }
      function removeFromCart(id) {
        setCartItems(currItems => {
          return currItems.filter(item => item._id !== id)
        })
      }


  

  

 
  return (    
    <CartContext.Provider value={{cartItems,getItemQuantity,removeFromCart,increaseCartQuantity,decreaseCartQuantity,getTotals,userAddress, setUserAddress,setCartItems}}>
        {children}
    </CartContext.Provider>
  );
};

//A simple hooks to facilitate the access to the CartContext
// and permit components to subscribe to CartContext updates
function useCart() {
    const context = useContext(CartContext);
  
    if (!context) {
      throw new Error('cartAuth must be used within an AuthProvider');
    }
  
    return context;
  }

export {CartContext, CartProvider, useCart};