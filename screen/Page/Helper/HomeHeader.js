import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native';
import useLocationsDetect from '../../../hooks/useLocationsDetect';
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import { Colors, InfoText } from '../../../components/style';
import { useCart } from '../../../Context/cartContext';

export default function HomeHeader() {
  const [isdilveryAddress]=useLocationsDetect();
  const {userAddress}=useCart()
  return (
    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
        <View style={{flexDirection:"row",elevation:1,width:250,backgroundColor:Colors.primary, alignItems:'center',borderRadius:10,paddingVertical:5}}>
          <Octicons style={{paddingHorizontal:5}} name={isdilveryAddress ===true? "location" :"alert"} size={20} color={isdilveryAddress ===true? Colors.brand :Colors.red}  />
          <InfoText numberOfLines={1} style={{fontWeight:'bold'}} >{userAddress?.StreetAddress===undefined ? "Loading..." : userAddress?.StreetAddress }</InfoText>
        </View>
        <TouchableOpacity >
          <Image source={require('../../../assets/user.png')} style={{
            height:50,
            width:50,
            borderRadius:50,
            borderColor:'#000',
            borderWidth:2
          }} />
        </TouchableOpacity>
    </View>
  )
}
