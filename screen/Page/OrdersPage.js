import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import {  ProductsWrapperCol } from '../../components/ProductCard/ProductStyle'
import { Avatar, AvatarSmall, Colors, InfoText, StyledContainer } from '../../components/style'
import BackNavigator from './Helper/BackNavigator'
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import Ordercard from '../../components/ProductCard/Ordercard'

export default function OrdersListPage() {
  return (
    <StyledContainer>
        <ScrollView>
        <BackNavigator label={"Orders"} />
            <Ordercard />        
            <Ordercard />
            <Ordercard />        
            <Ordercard />
            <Ordercard />        
            <Ordercard />
        </ScrollView>
        
    </StyledContainer>
  )
}
