import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import { Colors } from '../../../components/style'
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SearchComponent() {
    const navigation=useNavigation()
    return(
        <TouchableOpacity 
        onPress={()=>navigation.navigate('search',{focus:true})} 
          style={{
            marginVertical:10,
            flexDirection:'row',
            paddingHorizontal:5,
            justifyContent:'space-between',
            alignItems:'center',
            borderColor:'black',
            elevation:4,
            backgroundColor:Colors.primary,
            minHeight:50,
            borderRadius:5,
            borderBottomWidth:1.5
            
          }}
        >
          <TextInput  placeholderTextColor="#afb1b6" editable={false} keyboardType="ascii-capable" placeholder="Where are to deliver?" />        
          <Ionicons name="search" size={30} style={{marginRight:5}} color={Colors.brand} />                        
        </TouchableOpacity>
      )
}
