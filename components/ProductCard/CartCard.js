import React from 'react'
import { Text, View } from 'react-native'
import { AddCartButtonwrapper, AddcartDispaywrapper, AddCartWrapper, Card01Image, Card01ImageWrapper, CartImage, ProductsWrapper } from './ProductStyle'
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../../Context/cartContext';
import { Colors } from '../style';
export default function CartCard({data}) {
    const {increaseCartQuantity,decreaseCartQuantity,getItemQuantity} =useCart()
  return (
    <ProductsWrapper style={{
        height:50,
        borderRadius: 20,
        paddingRight:10,
        marginVertical: 2
        }}>
        <Card01ImageWrapper>
            <CartImage source={{uri:data.image}} resizeMode='contain'  />
        </Card01ImageWrapper>
        <View style={{flex: 2, justifyContent: 'center', marginHorizontal: 20}}>
            <Text style={{fontWeight: 'bold'}}>{data.name}</Text>
            <Text style={{fontWeight: 'bold', color: '#E2703A'}}>          
                Rs {data.quantity*data.basePrice}
            </Text>
      </View>
        <AddCartWrapper style={{marginTop:20}}>
            <AddCartButtonwrapper onPress={()=>decreaseCartQuantity(data)} style={{backgroundColor:Colors.red}}>
                <Ionicons name='remove-outline' color="#fff" size={16} />            
            </AddCartButtonwrapper>
            <AddcartDispaywrapper  style={{width:60}}>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>{getItemQuantity(data._id)}</Text>
            </AddcartDispaywrapper>
            <AddCartButtonwrapper style={{backgroundColor:Colors.green}} onPress={()=>increaseCartQuantity(data)}>
                <Ionicons name="add" color="#fff" size={16} /> 
            </AddCartButtonwrapper>
                        
        </AddCartWrapper>
    </ProductsWrapper>
  )
}