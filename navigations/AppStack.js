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
import OrderSuccess from "../screen/Page/OrderConfim";
import TrackOrder from "../screen/Page/TrackOrder";
import SettingPage from "../screen/Page/SettingPage";
import OrdersPage from "../screen/Page/OrdersPage";
import OrdersListPage from "../screen/Page/OrdersPage";

const Stack =createStackNavigator();

const AppStack=()=>{
    return (
            <Stack.Navigator 
                screenOptions={{
                    headerShown:false
                    
                }}
                

                initialRouteName="home"
                >
                
                <Stack.Screen name="home" component={HomePage} />
                <Stack.Screen name="search" component={SearchScreen}/>
                <Stack.Screen name="cart" component={CartPage} />
                <Stack.Screen name="address"  component={AddressPage} />
                <Stack.Screen name="checkout"  component={Checkout} />                
                <Stack.Screen name="phoneLogin"  component={PhoneLogin} />                               
                <Stack.Screen name="orderSuccess"  component={OrderSuccess} />                                              
                <Stack.Screen name="trackOrder"  component={TrackOrder} />
                <Stack.Screen name="setting"  component={SettingPage} />
                <Stack.Screen name="orderList"  component={OrdersListPage} />
            </Stack.Navigator>
    )
}

export default AppStack;