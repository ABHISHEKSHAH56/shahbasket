import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import { Colors } from '../style';


export default function Categoreycard({setcategorey,categorey,item}) {
    return (
        <TouchableOpacity style={{
            marginVertical:5,
            height:35,
            minWidth:90,                            
            borderWidth:categorey==item.name?0.5:0,
            backgroundColor:categorey==item.name? '#eb416e':Colors.white2,
            marginLeft:4,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            elevation:1,
            borderColor:Colors.gray
            


        }} onPress={()=>setcategorey(item.name)}>
            
            <Text style={{color:categorey==item.name?Colors.white :Colors.gray,fontWeight:'bold'}}>{item.name}</Text>
       
            
             </TouchableOpacity>

    )
}
