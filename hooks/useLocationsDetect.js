import React, { useEffect, useState } from 'react'
import {GOOGLE_API_KEY} from "@env"
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';
import { useCart } from '../Context/cartContext';

export default function useLocationsDetect() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const {userAddress, setUserAddress}=useCart();
  const [isdilveryAddress, setisdilveryAddress] = useState(false);
  console.log(GOOGLE_API_KEY);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  
  
  useEffect(() => {
    Geocoder.init(process.env.GOOGLE_API_KEY, {language: 'en'});
    Geocoder.from(location?.coords?.latitude, location?.coords?.longitude).then(
        json => {
            const Temp=json.results[0].address_components;
            setUserAddress({
                    StreetAddress:`${Temp[0].long_name} ${Temp[1].long_name} ${Temp[2].long_name} `,
                    city:Temp[4].long_name,
                    state:Temp[5].long_name,
                    country:Temp[6].long_name,
                    pinCode:Temp[7].long_name
            
            })
            
        } 
    );    
  }, [location])
 
  
  useEffect(() => {
    //console.log(userAddress)
        if(userAddress?.pinCode==="110005" || userAddress?.state==="Delhi" || userAddress?.city==="Central Delhi" )
        {
          console.log("check toh hua hai ")  
          setisdilveryAddress(true);
        }
        
        console.log(isdilveryAddress)
    
  }, [userAddress])
  
  
  return [errorMsg,isdilveryAddress];
}

