import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ButtonText, Colors, EmphasizeText, InfoText, SIZES, StyledButton, StyledContainer, TextLink, TextLinkContent } from '../../components/style'
import BackNavigator from './Helper/BackNavigator'




const track_order_status = [
    {
        id: 1,
        title: "Order Confirmed",
        sub_title: "Your order has been received"
    },
    {
        id: 2,
        title: "Order Prepared",
        sub_title: "Your order has been prepared"
    },
    {
        id: 3,
        title: "Delivery in Progress",
        sub_title: "Hang on! Your food is on the way"
    },
    {
        id: 4,
        title: "Delivered",
        sub_title: "Enjoy your meal!"
    },
    {
        id: 5,
        title: "Rate Us",
        sub_title: "Help us improve our service"
    }
]






export default function TrackOrder({navigation}) {
    const [currentStep, setcurrentStep] = useState(4)
     function renderHeder()
     {
         return(
             <SafeAreaView >
                 <Text style={{fontWeight:'bold',fontSize:18,margin:20,textAlign:'center'}}>DELIVERY STATUS</Text>
             </SafeAreaView>
         )
     }
    return (
        <StyledContainer>
        <View style={{
            flex:1,
            paddingHorizontal:SIZES.padding,
            backgroundColor:Colors.white
        }}>
            {/* header */}
            <BackNavigator label={"Delivery "}  />
            {/* info */}
            <View style={{
                marginTop:SIZES.padding,
                paddingHorizontal:SIZES.padding
            }}>
                <Text style={{
                    textAlign:'center',color:Colors.gray,...SIZES.body4
                }}>Estimated Delivery</Text>
                <Text style={{
                    textAlign:'center',...SIZES.h3,fontWeight:'bold'
                }}>21 Sept 2021</Text>

            </View>

            {/* deliveryinfo */}

            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{
                    marginTop:SIZES.padding,
                    paddingVertical:SIZES.padding,
                    borderRadius:SIZES.radius,
                    borderWidth:2,
                    borderColor:Colors.lightGray2,
                    backgroundColor:Colors.white2
                }}>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:"space-between",
                        alignItems:'center',
                        marginBottom:20,
                        paddingHorizontal:SIZES.padding
                    }}>
                        <Text style={{...SIZES.h3,fontWeight:'bold'}}>Track Order</Text>
                        <Text style={{color:Colors.gray,...SIZES.body3}}>NYONHDHD</Text>
                        </View>


                        {/* linedivder */}
                        <View style={{height:2,backgroundColor:Colors.gray}} />

                        {/* status */}
                        <View style={{
                            marginTop:SIZES.padding,
                            paddingHorizontal:SIZES.padding
                        }}>
                            {track_order_status.map((item,index)=>{
                                return(
                                    <View key={`Statuslist-${index}`}>
                                        <View style={{
                                            flexDirection:'row',
                                            alignItems:'center',
                                            marginVertical:-5,
            
                                        }}>
                                        <Image source={require('../../assets/check_circle.png')} style={{
                                            width:40,
                                            height:40,
                                            tintColor:index<=currentStep?Colors.green :Colors.lightGray1
                                        }} />
                                        <View style={{marginLeft:SIZES.radius}}>
                                            <Text style={{...SIZES.h3,fontWeight:'bold'}}>{item.title}</Text>
                                            <Text style={{color:Colors.gray,...SIZES.body4}}>{item.sub_title}</Text>
        
                                        </View>
                                        </View>
                                        {
                                            index < track_order_status.length - 1 &&
                                             <View>
                                                 {
                                                     index<currentStep && <View
                                                     style={{
                                                        height:40,
                                                        width:3,
                                                        marginLeft:18,
                                                        backgroundColor:Colors.black,
                                                        zIndex:-1
                                                    }}
                                                     
                                                     />
                                                 }
                                                {
                                                    index >= currentStep && <Image
                                                    source={require('../../assets/dotted_line.png')}
                                                    resizeMode="cover"
                                                    style={{
                                                        width:4,
                                                        height:40,
                                                        marginLeft:17
                                                    }}
                                                    
                                                    />
                                           
                                                }
                                            
                                            
                                            </View>
                                        }
                                        
        
                                    </View>
                                  

                                )
                            })}
                            

                        </View>


                </View>

            </ScrollView>
            {/* footer */}

            <View style={{
                marginTop:SIZES.radius,
                marginBottom:SIZES.padding
            }}>
                {
                    currentStep <track_order_status.length-1 &&
                    <TextLink onPress={()=>navigation.navigate('trackOrder')}>
                        <TextLinkContent style={{textDecorationLine:'underline'}}>Cancel  Your Order</TextLinkContent>
                    </TextLink>
                    
                    
                }
                {
                    currentStep ==track_order_status.length-1 &&
                    <>
                    <InfoText>
                       
                        <EmphasizeText style={{color:Colors.green}}>{` Order Dilvered `}</EmphasizeText>
                    </InfoText>
                    <InfoText>
                        Have Issue With Your Order mails Us   
                        <EmphasizeText>{` abhishekshah4010@gmail.com`}</EmphasizeText>
                    </InfoText>
                    </>
                    
                    
                }     
                    
                

            </View>
        </View>
        
            
        </StyledContainer>
    )
}

