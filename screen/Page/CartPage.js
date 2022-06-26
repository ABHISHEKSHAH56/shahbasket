import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import ProductCard2 from '../../components/ProductCard/Card02'
import { ButtonText, Colors, HeaderContainer, SIZES, StyledButton, StyledContainer } from '../../components/style'
import { useCart } from '../../Context/cartContext'
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import CartCard from '../../components/ProductCard/CartCard'
import { ProductsWrapper } from '../../components/ProductCard/ProductStyle'
import CartFooter from './Helper/CartFooter'
import Showmore from '../../components/showMore'

export default function CartPage({navigation}) {
  const {cartItems,removeFromCart,userAddress}=useCart()
  return (
    <StyledContainer>
      <View style={{height:SIZES.height-200}}>
          <SwipeListView
            data={cartItems}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            renderItem={({ item, index }) => {
                        return (
                            <CartCard data={item} key={index} />
                        )}}
            renderHiddenItem={ (data, rowMap) => (
              <View style={{
                flexDirection: 'row',                   
                marginBottom: 15,
                marginHorizontal: 4,
                borderRadius: 20,
                height: 40,
                shadowColor: Colors.gray,
                shadowOffset: {
                  height: 3,
                  width: 5,
                },
                shadowRadius: 4,
                shadowOpacity: 0.1,
                elevation: 4,
                backgroundColor:Colors.black,                   
               
                justifyContent:"flex-end"
            }}>
                <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginRight:25}} onPress={()=>removeFromCart(data.item._id)}>                 
                    <Ionicons name='remove-circle' size={35} color={Colors.primary} />
                </TouchableOpacity>
            </View>
            )}
            
            disableRightSwipe={true}            
            rightOpenValue={-75} 
            ListFooterComponent={
              <View style={{height:100}}></View>
            }           
            ListHeaderComponent={
                <>                    
                <HeaderContainer>                
                      <TouchableOpacity onPress={()=>navigation.pop()} >
                                <Ionicons name='arrow-back-circle' size={34 }  />
                      </TouchableOpacity>             
                        <TouchableOpacity onPress={()=>navigation.navigate('address')} style={{width:SIZES.width-80,elevation:1,backgroundColor:'#fff',borderRadius:25,paddingVertical:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <View style={{flex:1,marginLeft:4}}>
                            <Ionicons name="location" size={24} color='#F5AC92'  />
                            </View>
                            <View style={{flex:9,marginHorizontal:4}}>
                            {
                                userAddress!==null ?
                                <Text  numberOfLines={1}>{userAddress?.StreetAddress} </Text>
                                :
                                <Text  numberOfLines={1} style={{fontWeight:'bold'}}>Choose your Address </Text>
                            
                            
                            }
                            </View>                            
                        </TouchableOpacity>                        
                  </HeaderContainer> 
                  {
                     (cartItems.length>0 && <Showmore onPress={()=>navigation.navigate('home')} label="Add More" heading="Cart Items" />)
                  }                
                </>                
            }         
          />
        </View>
        <View style={{position:'absolute',bottom:0,backgroundColor:'#fff',right:2,left:2,borderTopWidth:2,borderTopRightRadius:20,borderTopLeftRadius:20,elevation:2,borderColor:Colors.lightOrange2}}>
        <CartFooter />
        {
          cartItems.length>0 ?
          <StyledButton onPress={()=>navigation.navigate('checkout')} style={{
            backgroundColor:Colors.green, flexDirection:"row",marginVertical:10 ,marginHorizontal:10
            }}>
            <ButtonText style={{fontWeight:'bold'}}>Proceed to Checkout</ButtonText>
            <Ionicons name="arrow-forward-circle" size={25} style={{marginLeft:2}} color={Colors.primary} />
          </StyledButton>
          :
          <StyledButton onPress={()=>{}} style={{
            backgroundColor:Colors.green, flexDirection:"row",marginVertical:10 ,marginHorizontal:10
          }}>
            <ButtonText style={{fontWeight:'bold'}}>Shop Now</ButtonText>
            <Ionicons name="arrow-forward-circle" size={25} style={{marginLeft:2}} color={Colors.primary} />
          </StyledButton>
        }
        </View>
    </StyledContainer>
  )
}
