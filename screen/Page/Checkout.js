import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ButtonText, Colors, EmphasizeText, HeaderContainer, InfoText, Line, SIZES, StyledButton, StyledContainer, TableHeader } from '../../components/style'
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import Showmore from '../../components/showMore';
import CartFooter from './Helper/CartFooter';
import { useCart } from '../../Context/cartContext';
import { useAuth } from '../../Context/authContext';
import { useIsFocused } from '@react-navigation/native';
import BackNavigator from './Helper/BackNavigator';
export default function Checkout({navigation}) {
  const {cartItems,userAddress,setCartItems}=useCart()
  const {authData}=useAuth()
  const [StepChecker, setStepChecker] = useState([]);
  const isFocused=useIsFocused()
  const [isOrdering, setisOrdering] = useState(false)
  console.log(authData)
  useEffect(() => {
    setStepChecker([])
    if(userAddress==null)
    {
      setStepChecker([{name:"Add Address  ", path:"address"}])
    }    
    if(authData==null)
    {
      //add login but by thw wau its for verifying the phone number
      setStepChecker([{name:"Add Details ", path:"phoneLogin"}]) 

    }
    if(cartItems.length==0)
    {
      setStepChecker([{name:"Show Now ", path:"home"}])

    }
    
  }, [userAddress,cartItems,authData,isFocused])

  const orderPlaced=()=>{
    setisOrdering(true)
    const data={
      user:authData.user._id,
      items:cartItems,
      address:userAddress
    }
    setCartItems([])
    navigation.navigate('orderSuccess')
    setisOrdering(false)
    
  }
  if(isOrdering)
  {
    return(
    <View style={{flex:1 ,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>

      <ActivityIndicator  size={"large"} />
    </View> 
    )
  }
  
  return (
    <StyledContainer>
      <BackNavigator label={"Checkout"} />
        
      
          
        <Showmore label={"Add"} onPress={()=>navigation.navigate('home')} heading="Summary " />
        <View style={{padding:10,backgroundColor:Colors.white,elevation:3,borderRadius:5}}>
        <TableHeader>
          <View style={{flex:3}}>
            <Text style={{fontWeight:'bold' ,color:Colors.brand}}> Name</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={{fontWeight:'bold',color:Colors.brand}}>Qty</Text>
          </View>
          <View style={{flex:2,alignItems:'center'}}>
            <Text style={{fontWeight:'bold',color:Colors.brand}}>Price</Text>
          </View>
        </TableHeader> 
        <Line />
        { cartItems.length>0?
          cartItems.map((item)=>{
            return(
              <TableHeader key={item._id} style={{marginTop:2}}>
                  <View style={{flex:3}}>
                    <Text style={{fontWeight:'bold'}}> {item.name} </Text>
                  </View>
                  <View style={{flex:2}}>
                    <Text >{item.baseQty}{item.measurment} x {item.quantity}</Text>
                  </View>
                  <View style={{flex:2,alignItems:'center'}}>
                    <Text style={{textAlign:'center'}} >{item.quantity*item.basePrice}.00</Text>
                  </View>          
              </TableHeader>

            )
          }):
          <View style={{marginTop:5, flexDirection:'row',paddingHorizontal:5}}>
          <Ionicons name='alert-circle' size={25} color={Colors.red} />
          <Text style={{fontWeight:'bold', margin:4}}>No Item founds </Text>
        </View>
          
        }        
        
        </View>
        <Showmore label={"Change"} heading="Delivery Address " />
        {
          userAddress!=null?
          <View style={{elevation:2,padding:4,backgroundColor:Colors.white,borderRadius:2,paddingHorizontal:15}}>
            <InfoText >{userAddress?.StreetAddress}</InfoText>
            <InfoText >{userAddress?.city},{userAddress?.state},India, {userAddress?.pinCode}</InfoText>
          </View>
          :
          <View style={{marginTop:5, flexDirection:'row',paddingHorizontal:5}}>
            <Ionicons name='information-circle' size={25}  />
            <Text style={{margin:4}}>Please Add your Address</Text>
          </View>

        }
        <Showmore label={"Change"} heading="Persnal Info " />
        
        {
          authData!=null?
          <View style={{elevation:2,padding:4,backgroundColor:Colors.white,borderRadius:5,paddingHorizontal:15}}>
          <View style={{flexDirection:'row'}}>
            <EmphasizeText>Email: </EmphasizeText>     
            <InfoText >{authData?.user?.email}</InfoText>
          </View>
          <View style={{flexDirection:'row'}}>
          <EmphasizeText>Phone Number: </EmphasizeText>     
          <InfoText >8076367467</InfoText>
          <Ionicons name='checkmark-circle' size={15}  style={{margin:2}} color={Colors.green}/>
          </View>
        </View>
          
          :
          <View style={{marginTop:5, flexDirection:'row',paddingHorizontal:5}}>
            <Ionicons name='information-circle' size={25}  />
            <Text style={{margin:4}}>Please Add your Persnal Details</Text>
          </View>

        }
        
        <View style={{marginTop:5, flexDirection:'row',paddingHorizontal:5}}>
          <Ionicons name='information-circle' size={25} color={Colors.brand} />
          <Text style={{fontWeight:'bold', margin:4}}>Order  will be delivery within in 2-3 days </Text>
        </View>
        <View style={{position:'absolute',bottom:0,backgroundColor:'#fff',right:2,left:2,borderTopWidth:2,borderTopRightRadius:20,borderTopLeftRadius:20,elevation:2,borderColor:Colors.lightOrange2}}>
          
          <CartFooter />
          {
              StepChecker.length>0 ?
              <StyledButton onPress={()=>navigation.navigate(StepChecker[0].path)} style={{
                backgroundColor:Colors.green, flexDirection:"row",marginVertical:10 ,marginHorizontal:10
                }}>
                <ButtonText style={{fontWeight:'bold'}}>{StepChecker[0].name}</ButtonText>
                <Ionicons name="arrow-forward-circle" size={25} style={{marginLeft:2}} color={Colors.primary} />
              </StyledButton>
              :
              <StyledButton onPress={orderPlaced} style={{
                backgroundColor:Colors.green, flexDirection:"row",marginVertical:10 ,marginHorizontal:10
              }}>
                <ButtonText style={{fontWeight:'bold'}}>Proceed To Payment </ButtonText>
                <Ionicons name="arrow-forward-circle" size={25} style={{marginLeft:2}} color={Colors.primary} />
              </StyledButton>
        }

        </View>
                

    </StyledContainer>
  )
}
