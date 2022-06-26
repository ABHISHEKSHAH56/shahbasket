import React, { useEffect, useState } from 'react'
import { ButtonText, Colors, HeaderContainer, LeftIcon, Line, StyledAddressTextInput, StyledButton, StyledContainer, StyledInputLabel, StyledTextInput } from '../../components/style'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "@env"
import * as Location from 'expo-location';

// icon
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Geocoder from 'react-native-geocoding';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useLocationsDetect from '../../hooks/useLocationsDetect';
import { useCart } from '../../Context/cartContext';

export default function AddressPage() {
  const [location, setLocation] = useState(null);
  const {userAddress,setUserAddress}=useCart()
  const navigation=useNavigation()
  const [CurrentLocation, setCurrentLocation] = useState(userAddress);
  const [toShow, settoShow] = useState(true)
  const [loader, setloader] = useState(false)
  const handleSubmission=()=>{
      setUserAddress(CurrentLocation)     
      navigation.pop()

  }
  const convertLocation=() => {
    Geocoder.init(GOOGLE_API_KEY, {language: 'en'});
    Geocoder.from(location?.latitude,location?.longitude).then(
        json => {

            const Temp=json.results[0].address_components;
            setCurrentLocation({
                    StreetAddress:`${Temp[0].long_name} ${Temp[1].long_name} ${Temp[2].long_name} `,
                    city:Temp[4].long_name,
                    state:Temp[5].long_name,
                    country:Temp[6].long_name,
                    pinCode:Temp[7].long_name
            
            })
          settoShow(false)
          setloader(false)
            
        } 
    );    
  }
  
  
  return (
    
    
      <StyledContainer>
      <HeaderContainer style={{borderBottomWidth:2}}>
          <TouchableOpacity onPress={()=>navigation.pop()} >
            <Ionicons name='arrow-back-circle' size={34 }  />
          </TouchableOpacity> 
          <View style={{justifyContent:'center',flexDirection:'row'}}>
              <Text style={{fontWeight:'bold',textTransform:'uppercase',fontSize:18}}>
                Address
              </Text>
          </View>
      </HeaderContainer>
      {
        toShow?
        <View style={styles.card}>
          <View style={styles.drop}>
              <Text style={styles.dropText}> Drop Address</Text>            
          </View>      
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
              <GooglePlacesAutocomplete 
                  renderRightButton={() => {
                      return (
                              <View style={styles.inputwrapper}>
                                  <Ionicons name="search" size={24} style={{marginRight:10}} />
                              </View>
                      )
                  }}                                                
                  placeholderTextColor="#afb1b6" placeholder="Where are to deliver?"
                  nearbyPlacesAPI="GooglePlacesSearch"
                  debounce={400}
                  styles={{
                      container: {
                              flex: 1,
                              marginTop: 15,
                              elevation: 1,
                              backgroundColor: Colors.white2,
                              borderRadius: 10
                          },
                      textInput: {
                              fontSize: 16,
                              height: 50,
                      }
                  }}
                  minLength={4}
                  enablePoweredByContainer={false}
                  fetchDetails={true}
                  returnKeyType={"search"}
                  onPress={(data, details = null) => {
                          // 'details' is provided when fetchDetails = true
                          setloader(true)
                          setLocation({
                            latitude:details.geometry.location.lat,
                            longitude:details.geometry.location.lng
                          })
                          convertLocation()                      
                  }}
                  query={{
                          key: GOOGLE_API_KEY,
                          language: 'en',
                  }}
                />
          </View>
          <Line />
          <TouchableOpacity onPress={()=>settoShow(false)} style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Ionicons name='locate' size={25} />
              <Text style={{color:Colors.brand,fontWeight:'bold'}}> Use Current location</Text>                        
          </TouchableOpacity>
          { loader && <ActivityIndicator size={"small"} color={Colors.black}  /> }
        </View>:      
          <View style={styles.card}>
          <View style={{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
          }}>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:18}}> Address</Text>            
          </View>
          <View>
              <MyTextInput
                label="Street Address"
                placeholderTextColor={Colors.darkLight}
                value={CurrentLocation?.StreetAddress}
                onChangeText={(e)=>setCurrentLocation({...CurrentLocation,StreetAddress: e })}
                
              />
              <MyTextInput
              label="City"
              placeholderTextColor={Colors.darkLight}
              value={CurrentLocation?.city}
              onChangeText={(e)=>setCurrentLocation({...CurrentLocation,city: e })}
            />
            
            <MyTextInput
              label="State"
              placeholderTextColor={Colors.darkLight}
              value={CurrentLocation?.state}
              onChangeText={(e)=>setCurrentLocation({...CurrentLocation,state: e })}
            />
           
            <MyTextInput
              label="Pin Code"
              placeholderTextColor={Colors.darkLight}
              keyboardType="number-pad"
              value={CurrentLocation?.pinCode}
              onChangeText={(e)=>setCurrentLocation({...CurrentLocation,pinCode: e })}
            />
            
          </View>
          <StyledButton onPress={handleSubmission}>
                    <ButtonText>Sumbit</ButtonText>
          </StyledButton>

        </View>
      
        }
                                            
           

    </StyledContainer>

   
    
  )
}


const MyTextInput = ({ label, ...props }) => {
  return (
    <View>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledAddressTextInput  {...props} />      
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#ffff'

  },
  card:{
      padding:20,
      marginHorizontal:10,
      borderColor:'#efefef',
      borderWidth:1,
      borderRadius:20,
      marginTop:50,


  },
  drop:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',


  },
  dropText:{
      fontWeight:'bold',
      color:'#ff5563'

  },
  inputwrapper:{
      flexDirection:'row',
      alignItems:'center',


  },
  bottomCard:{
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     marginTop:20,

 },
 bottomCardPin:{
     flexDirection:'row',
     alignItems:'center'

 },
 bottomCardIcon:{
     color:'#ff4858',
     marginRight:10,


 },
 bottomCardText:{
     color:'#92939b',
     fontWeight:'500',
     fontSize:16

 },
 bottomCircle:{
     width:50,
     height:50,
     borderRadius:50,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:'#000'

 },
 containerwrapper:{
     paddingHorizontal:20,
     marginTop:20

 },
 bidtitle:{
     fontWeight:'bold',
     fontSize:20,
     color:'#404152',
     marginBottom:20,
 },
 favwrapper:{
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     marginBottom:20,


 },
 favwrapper2:{
     flexDirection:'row'
 },
 favTitle:{
     fontWeight:'bold',
     fontSize:16,
     color:'#555664',
     marginBottom:5

 },
 subTitle:{
     color:'#a9abb8'
 }
 
});


