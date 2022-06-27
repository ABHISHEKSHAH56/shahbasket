import React from 'react'
import { Text, TouchableOpacity, TouchableWithoutFeedbackComponent, View } from 'react-native'
import { Avatar, Colors, InfoText, InnerContainer, PageLogo, PageTitle, StyledContainer, SubTitle } from '../../components/style'
import BackNavigator from './Helper/BackNavigator'
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../Context/authContext';

export default function SettingPage({navigation }) {
    const {signOut}=useAuth()
  return (
    <StyledContainer>
        <BackNavigator label={"Setting"} />
        
          <Avatar resizeMode="cover" source={require('../../assets/user.png')} />
          <SubTitle >Settings</SubTitle>         
        
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('orderList')}   style={{flexDirection:'row',backgroundColor:Colors.white,elevation:1,borderRadius:10,marginVertical:2,paddingHorizontal:20,minHeight:40,alignItems:'center'}}>
                <Text style={{textAlign:'center',marginLeft:10,fontWeight:'bold',fontSize:14,marginVertical:5}}>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}   style={{flexDirection:'row',backgroundColor:Colors.white,elevation:1,borderRadius:10,marginVertical:2,paddingHorizontal:20,minHeight:40,alignItems:'center'}}>
                <Text style={{textAlign:'center',marginLeft:10,fontWeight:'bold',fontSize:14,marginVertical:5}}>Address</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}   style={{flexDirection:'row',backgroundColor:Colors.white,elevation:1,borderRadius:10,marginVertical:2,paddingHorizontal:20,minHeight:40,alignItems:'center'}}>               
                <Text style={{textAlign:'center',marginLeft:10,fontWeight:'bold',fontSize:14,marginVertical:5}}>Terms & Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}   style={{flexDirection:'row',backgroundColor:Colors.white,elevation:1,borderRadius:10,marginVertical:2,paddingHorizontal:20,minHeight:40,alignItems:'center'}}>               
                <Text style={{textAlign:'center',marginLeft:10,fontWeight:'bold',fontSize:14,marginVertical:5}}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>signOut()}   style={{flexDirection:'row',backgroundColor:Colors.white,elevation:1,borderRadius:10,marginVertical:2,paddingHorizontal:20,minHeight:40,alignItems:'center'}}>
               <Text style={{textAlign:'center',marginLeft:10,fontWeight:'bold',fontSize:14,marginVertical:5}}>Logout</Text>
            </TouchableOpacity>
            

         </View>
    </StyledContainer>
  )
}
