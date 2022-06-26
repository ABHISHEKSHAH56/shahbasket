import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { AddCartButtonwrapper, AddcartDispaywrapper, AddCartWrapper, Card01Detailswrapper, Card01Image, Card01ImageWrapper, PercentageText, PercentageWrapper, ProductsWrapper } from "./ProductStyle";
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import { Colors } from "../style";
import { useCart } from "../../Context/cartContext";
export default function Card01({data}) {
  const {cartItems,increaseCartQuantity,decreaseCartQuantity,getItemQuantity} =useCart()
  const percentage=parseInt((data.baseMaxPrice-data.basePrice)*100/data.baseMaxPrice)
  return (
    <ProductsWrapper>
        <PercentageWrapper style={{backgroundColor: percentage<20 ? Colors.brand : percentage<40? Colors.orange :Colors.green }} >
            <PercentageText style={{transform: [{rotate: '-90deg'}]}}>
            {percentage} %OFF
            </PercentageText>
        </PercentageWrapper>
        <Card01Detailswrapper>
        <Text style={{fontWeight: 'bold'}}>{data.name}</Text>
        <Text numberOfLines={2} style={{fontSize: 10, color: Colors.gray}}>
          {data.description}
        </Text>
        <Text style={{fontWeight: 'bold', color: '#E2703A'}}>
           
          Rs {data.basePrice} /<Text style={{color:Colors.black,fontSize:10,fontWeight:"bold",paddingLeft:2}}> {data.baseQty} Kg</Text>
        </Text>
        <Text
              style={{
                fontSize: 10,
                color: Colors.gray,
                textDecorationLine: 'line-through',
              }}>
              Rs {data.baseMaxPrice}.00/Kg{' '}
            </Text>
            
        </Card01Detailswrapper>
        <Card01ImageWrapper>
            <Card01Image source={{uri:data.image }} resizeMode="contain" />
            {
                getItemQuantity(data._id)===0?
                    <TouchableOpacity onPress={()=>increaseCartQuantity(data)} style={{alignSelf:'center' ,backgroundColor:Colors.green,height:25,width:75,justifyContent:'center',alignItems:'center',borderRadius:10,marginVertical:10}} >
                        <Text style={{fontWeight:'bold',color:'#fff',paddingVertical:2}}>Add</Text>     
                    </TouchableOpacity>
                    :                    
                    <AddCartWrapper>
                        <AddCartButtonwrapper onPress={()=>decreaseCartQuantity(data)} style={{backgroundColor:Colors.red}}>
                            <Ionicons name='remove-outline' color="#fff" size={16} />            
                        </AddCartButtonwrapper>
                        <AddcartDispaywrapper onPress={()=>{}}>
                            <Text style={{fontWeight: 'bold', fontSize: 12}}>{getItemQuantity(data._id)}</Text>
                        </AddcartDispaywrapper>
                        <AddCartButtonwrapper style={{backgroundColor:Colors.green}} onPress={()=>increaseCartQuantity(data)}>
                            <Ionicons name="add" color="#fff" size={16} /> 
                        </AddCartButtonwrapper>
                    </AddCartWrapper>   
            }                     
        </Card01ImageWrapper>
    </ProductsWrapper>
  );
}

