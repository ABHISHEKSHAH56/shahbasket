
import { AddCartButtonwrapper, AddcartDispaywrapper, AddCartWrapper, Card01Image, Card02AddCartWrapper, Card02DetailsWrapper, Card02ImageWrapper, ProductsWrapper } from './ProductStyle';
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../style';
import { useState } from 'react';
import { useCart } from '../../Context/cartContext';
export default function ProductCard2({data}) { 
  
  const {increaseCartQuantity,decreaseCartQuantity,getItemQuantity} =useCart()
    return(        
        <ProductsWrapper>
            <Card02ImageWrapper>
                <Card01Image resizeMode="contain" source={{uri:data.image}} />
            </Card02ImageWrapper>
            <Card02DetailsWrapper>
                <Text style={{fontWeight: 'bold'}}>{data.name}</Text>
                <Text numberOfLines={2} style={{fontSize: 10, color: Colors.gray}}>
                {data.description}
                </Text>
                <Text numberOfLines={1} style={{fontSize: 10, color: Colors.black}}>
                weight (500gm-750gm )
                </Text>
            </Card02DetailsWrapper>
            <Card02AddCartWrapper>
                <View>
                    <Text style={{fontWeight: 'bold', color: '#E2703A'}}>           
                            Rs {data.basePrice*data.baseQty} /<Text style={{color:Colors.black,fontSize:10,fontWeight:"bold",paddingLeft:2}}> {data.baseQty} {data.measurment}</Text>
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text
                            style={{
                            fontSize: 10,
                            color: Colors.gray,
                            textDecorationLine: 'line-through',
                            }}
                        >
                            Rs {data.baseMaxPrice}.00 per {data.measurment}
                        </Text>
                        <Text
                            style={{
                                marginLeft: 4,
                                color: Colors.green,
                                fontWeight: '700',
                                fontSize: 10,
                            }}>
                                {parseInt((data.baseMaxPrice-data.basePrice)*100/data.baseMaxPrice)}% OFF
                        </Text>
                    </View>
                </View>
                {
                getItemQuantity(data._id)===0? 
                    <TouchableOpacity onPress={()=>increaseCartQuantity(data)} style={{alignSelf:'center' ,backgroundColor:Colors.green,height:25,width:55,justifyContent:'center',alignItems:'center',borderRadius:10,marginTop:10}} >
                        <Text style={{fontWeight:'bold',color:'#fff',paddingVertical:2}}>Add</Text>     
                    </TouchableOpacity>
                    :
                    <AddCartWrapper style={{marginTop:10}}>
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

                }
            </Card02AddCartWrapper>
        </ProductsWrapper>
    );

}