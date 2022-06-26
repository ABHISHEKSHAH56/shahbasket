import React, { useEffect, useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { fetchProduct } from '../../API/Index';
import { categoreyValue } from '../../components/constant';
import ProductCard2 from '../../components/ProductCard/Card02';
import Categoreycard from '../../components/ProductCard/CategoreyCard';
import { Colors, StyledContainer } from '../../components/style';
import { useCart } from '../../Context/cartContext';
import FooterCart from './Helper/FooterCart';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';

export default function SearchScreen({navigation,route}) {
    const [categorey, setcategorey] = useState(route.params.url?route.params.url:"All" )
    const [Product, setProduct] = useState([]);    
    const [search, setsearch] = useState('')

    useEffect(() => {
        AsyncStorage.getItem("@SahaProducts").then((res)=>{
            setProduct(JSON.parse(res));
        })    
    }, []);
    const filterData = React.useMemo(() => {
        let filterProduct = Product;
        if (search) {
                filterProduct = filterProduct.filter(
                        (item) => item.name.toLowerCase().includes(search.toLowerCase()) ||
                                item.englishName.toLowerCase().includes(search.toLowerCase())

                );

        }
        if (categorey !== 'All' ) {

            if(categorey==="Vegetable")
            {
                filterProduct = filterProduct.filter((item)=>item.categorey!=="Fruits");
            }
            else{
                filterProduct = filterProduct.filter((item) => item.categorey === categorey);
            }
        }
       
        return filterProduct;
    }, [categorey, Product, search]);

  return (
    <StyledContainer>
        <FlatList 
            data={filterData}
            keyExtractor={(item)=>item._id}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>{
                return <ProductCard2 data={item} key={item._id} />

            }}
            ListHeaderComponent={
                <>                    
                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:20,
                    marginBottom:5,
                    marginHorizontal:10                    
                    }}>
                                            
                    <View>
                        <Text style={{fontWeight:'bold',textTransform:'uppercase',fontSize:18}}>
                            Search
                        </Text>
                    </View>
                    
                </View>
                {/* search */}
                <View style={{
                    marginVertical:10,
                    marginHorizontal:10,
                    padding:5,
                    backgroundColor:Colors.lightGray2,
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    borderRadius:15,
                    borderColor:'#efeff0',
                    borderWidth:2
                }}>
                    <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                    }}>                           
                        <TextInput placeholderTextColor="#afb1b6"
                            value={search}
                            keyboardType="ascii-capable"
                            autoFocus={route.params.focus}
                            onChange={(e)=>setsearch(e.nativeEvent.text)}                                    
                            placeholder="Search Anything ......" />
                    </View>
                    <TouchableOpacity >
                            <Ionicons name="search" size={24} style={{marginRight:5}} />
                    </TouchableOpacity>                        
                </View>

                {/* categorey */}
                <View style={{marginVertical:5}}>
                        <FlatList
                            data={categoreyValue}
                            style={{marginVertical:5}}                            
                            keyExtractor={(item,index)=>index+3}
                            horizontal={true}
                            renderItem={({item})=>{
                                return (
                                    <Categoreycard categorey={categorey} setcategorey={setcategorey} item={item} />
                                    
                                    )
                            }}

                        
                        
                        />
                </View>
            </>
                
            }
            ListFooterComponent={
                <View style={{height:100}}>
                    </View>
            }
        />
        <FooterCart />
                
    </StyledContainer>
  )
}
