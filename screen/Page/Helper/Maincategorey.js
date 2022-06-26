import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { FlatList, TouchableOpacity, Image } from 'react-native'
import { categoreyItem } from '../../../components/constant'
import { Colors } from '../../../components/style'

export default function Maincate() {
        const navigation=useNavigation()
    return(
        <FlatList
                            data={categoreyItem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            ListFooterComponentStyle={{
                                    marginTop: 20
                            }}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                    return (
                                            <TouchableOpacity onPress={()=>navigation.navigate('search',{focus:true})} style={{ flex: 1, alignItems: 'center', width: 105, marginRight: 5, marginBottom: 10 }}  >
                                                    <Image source={item.image} style={{ height: 100, width: 100, borderRadius: 115, paddingVertical: 16, borderBottomWidth: 3, borderColor: Colors.black }} resizeMode='contain' />


                                            </TouchableOpacity>
                                    )
                            }}


                    />
    )
    

    
}
