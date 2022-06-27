import React from 'react'
import { Text, View } from 'react-native'
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import { ProductsWrapperCol } from './ProductStyle';
import { AvatarSmall, Colors, InfoText } from '../style'

export default function Ordercard() {
  return (
    
    <ProductsWrapperCol>
    <View style={{paddingHorizontal:15}}>
        <Text style={{fontWeight:'bold', fontSize:16}}>OrderId-#20222001</Text>
        <InfoText>12 June 2022 | 20:38 PM</InfoText>
    </View>
    <View style={{flexDirection:'row' }}>
        <AvatarSmall resizeMode="contain" source={{uri:'https://res.cloudinary.com/shahbasket/image/upload/v1642079341/products/carrots-vegetables_dkrb9u.jpg'}} />
        <AvatarSmall  resizeMode="contain"  source={{uri:"https://res.cloudinary.com/shahbasket/image/upload/v1642079342/products/Dhaniya-ke-Patte_uh9v1p.jpg"}} />
        <AvatarSmall  resizeMode="contain"  source={{uri:"https://res.cloudinary.com/shahbasket/image/upload/v1642079344/products/Peppermint_xkoidm.jpg"}} />
        <AvatarSmall resizeMode="contain" source={{uri:'https://res.cloudinary.com/shahbasket/image/upload/v1642079341/products/carrots-vegetables_dkrb9u.jpg'}} />
        <AvatarSmall  resizeMode="contain"  source={{uri:"https://res.cloudinary.com/shahbasket/image/upload/v1642079342/products/Dhaniya-ke-Patte_uh9v1p.jpg"}} />
        <AvatarSmall  resizeMode="contain"  source={{uri:"https://res.cloudinary.com/shahbasket/image/upload/v1642079344/products/Peppermint_xkoidm.jpg"}} />
        <Ionicons  name='add-circle' size={32} style={{margin:5}} />
    </View>
    <View style={{flexDirection:'row' }} >
        <View style={{flex:1,margin:5,padding:5}}>
            <Text style={{fontWeight:'bold'}}>Status</Text>
            <Text style={{color:Colors.green}}>Delivered</Text>

        </View>
        <View style={{flex:1,margin:5,padding:5}}>
            <Text style={{fontWeight:'bold'}}>Products</Text>
            <Text >15</Text>
            
        </View>
        <View style={{flex:1,margin:5,padding:5}}>
        <Text style={{fontWeight:'bold'}}>Order Price </Text>
        <Text >$ 150.00</Text>
            
        </View>

    </View>


</ProductsWrapperCol>

  )
}
