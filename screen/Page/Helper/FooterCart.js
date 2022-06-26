import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useCart } from '../../../Context/cartContext'
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../components/style';
import { useNavigation } from '@react-navigation/native';

export default function FooterCart() {
    const navigation=useNavigation();
    const {cartItems,getTotals}=useCart()
    const [subtotal,grandTotal]=getTotals();
    console.log(subtotal,grandTotal);
  return (
    
        cartItems.length>0 ?
        <View style={{ height: 50, position: 'absolute', bottom: 0, backgroundColor: '#7b2cbf', left: 0, right: 0, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
            <TouchableOpacity onPress={() => navigation.navigate("cart")} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 15 }}>
                        <Text style={{ color: Colors .white, fontWeight: '700', }}> {cartItems.length}  ITEM | </Text>                                
                        <Text style={{ color: Colors .white, fontWeight: '600', fontSize: 14, marginLeft: 3 }}>Rs {subtotal.toFixed(2)} + </Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 15 }}>
                        <Text style={{ color: Colors .white, fontWeight: '700', fontSize: 15 }}>View Cart</Text>
                        <Ionicons name='cart' size={25} color={Colors.primary}  style={{ marginLeft: 5 }} />
                </View>
           </TouchableOpacity>
        </View>
        :
        <View></View>
    
  )
}
