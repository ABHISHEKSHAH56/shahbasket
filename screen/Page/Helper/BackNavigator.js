import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderContainer, SIZES } from '../../../components/style'
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';

export default function BackNavigator({press,label}) {
    const navigation=useNavigation();
  return (
    <HeaderContainer>                
            <TouchableOpacity onPress={()=>navigation.pop()} >
                        <Ionicons name='arrow-back-circle' size={34 }  />
            </TouchableOpacity>             
            <View  style={{width:SIZES.width-180,elevation:1,backgroundColor:'#fff',borderRadius:25,paddingVertical:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                
                <View style={{marginHorizontal:4}}>
                    <Text  numberOfLines={1} style={{fontWeight:'bold'}}>{label} </Text>                        
                </View>                            
            </View>                        
    </HeaderContainer> 
  )
}
