import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { fetchProduct } from '../../API/Index';
import Carousel from '../../components/Carousel';
import Card01 from '../../components/ProductCard/Card01';
import ProductCard2 from '../../components/ProductCard/Card02';
import Showmore from '../../components/showMore';
import { Colors, StyledContainer } from '../../components/style';
import FooterCart from './Helper/FooterCart';
import HomeHeader from './Helper/HomeHeader';
import Maincate from './Helper/Maincategorey';
import SearchComponent from './Helper/SearchComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomePage() {
  const [Product, setProduct] = useState([]);
  
  useEffect(() => {
    async function fetchproduct(){
      await fetchProduct().then((res)=>{
        setProduct(res.data.product);
        AsyncStorage.setItem("@SahaProducts",JSON.stringify(res.data.product))
      })
    }
    fetchproduct();
    
  }, []);
  
  
  return (
   
    <StyledContainer>
      <FlatList
          data={Product}                            
          keyExtractor={(item, index) => index + 5}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <ActivityIndicator size={"large"} color={Colors.primary} />
          }
          renderItem={({ item }) =>{
            return <ProductCard2 data={item} key={item._id} />
          }}
          ListHeaderComponent={
            <>
            <HomeHeader />
            <SearchComponent />
            <Showmore onPress={()=>{}} label="Show More" heading="Shop By Categorey" />
            <Maincate />
            <Showmore onPress={()=>{}} label="Show More" heading="Best Deal" />
                                    
            </>
          }
          ListFooterComponent={
            <>
            <Carousel />
            <FlatList 
              data={Product}
              keyExtractor={(item)=>item._id}
              renderItem={({ item }) =>{
                return(
                    <Card01 data={item} key={item._id} />

                )}}              
              />        
            <View style={{marginBottom:100}}></View>
            </>
          }
        /> 
        <FooterCart /> 
           
    </StyledContainer>  
  )
}
