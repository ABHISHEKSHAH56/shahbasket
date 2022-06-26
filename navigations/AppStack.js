import React  from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from "../components/style";
import Verification from "../screen/Auth/LinkVerifications";
import otpVerification from "../screen/Auth/otpVerification";
import HomePage from "../screen/Page/HomePage";
import SearchScreen from "../screen/Page/SearchScreen";
import CartPage from "../screen/Page/CartPage";
import AddressPage from "../screen/Page/AddressPage";
import Checkout from "../screen/Page/Checkout";
import PhoneLogin from "../screen/Auth/Phone";

const Stack =createStackNavigator();

const AppStack=()=>{
    return (
            <Stack.Navigator 
                screenOptions={{
                    headerStyle:{
                        backgroundColor:'transparent'
                    },
                    headerTintColor: Colors.tertiary,
                    headerTransparent:true,
                    headerTitle:'',
                    headerLeftContainerStyle:{
                        paddingLeft:10 
                    }
                }}
                initialRouteName="home"
                >
                
                <Stack.Screen name="home" component={HomePage} />
                <Stack.Screen name="search" component={SearchScreen}/>
                <Stack.Screen options={{headerLeft: (props) => null }}name="cart" component={CartPage} />
                <Stack.Screen name="address" options={{headerLeft: (props) => null }} component={AddressPage} />
                <Stack.Screen name="checkout" options={{headerLeft: (props) => null }} component={Checkout} />                
                <Stack.Screen name="phoneLogin" options={{headerLeft: (props) => null }} component={PhoneLogin} />
            </Stack.Navigator>
    )
}

export default AppStack;