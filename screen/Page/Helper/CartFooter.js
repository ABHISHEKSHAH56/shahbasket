import React from 'react'
import { Text, View } from 'react-native';
import { Colors, Line } from '../../../components/style'
import { useCart } from '../../../Context/cartContext'

export default function CartFooter() {
    const {cartItems,getTotals}=useCart()
    const [subtotal,grandTotal,deliverycharge]=getTotals();
  return (
    <View>
        {            
            cartItems.length>0?
            <>
            <View style={{marginHorizontal:15}}>
            <Text style={{fontWeight:'bold'}}>Bill Details</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginVertical:5}}>
                <Text style={{color:Colors.gray}}>Subtotal</Text>
                <Text style={{color:Colors.gray,fontWeight:'bold'}}>Rs {subtotal.toFixed(2)} </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginVertical:5}}>
                <Text style={{color:Colors.gray}}>Shipping Charges</Text>
                <Text style={{color:Colors.gray,fontWeight:'bold'}}>Rs {deliverycharge.toFixed(2)}</Text>
            </View>
            <Line style={{marginHorizontal:10}} />
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginVertical:5}}>
                <Text style={{fontWeight:'bold'}}>Grand Total</Text>
                <Text style={{fontWeight:'bold'}}>Rs {grandTotal.toFixed(2)}</Text>
            </View>
            </>:
            <View></View>
        }
    </View>
                   
  )
}
