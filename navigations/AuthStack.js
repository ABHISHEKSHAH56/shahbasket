import React  from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from "../components/style";
import Login from "../screen/Auth/Login";
import Signup from "../screen/Auth/Signup";
import PhoneLogin from "../screen/Auth/Phone";

const Stack =createStackNavigator();

const AuthStack=()=>{
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
                initialRouteName="Login"
                >
                <Stack.Screen  name="Login" component={Login}/>
                <Stack.Screen  name="Signup" component={Signup}/>
                <Stack.Screen name="PhoneLogin" component={ PhoneLogin } />
            </Stack.Navigator>
    )
}

export default AuthStack;