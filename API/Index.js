import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; //importing axios for making requests 
const API = axios.create({ baseURL: `https://shahbasket.herokuapp.com`, withCredentials: true }) //instance of axios for working with public APIS 
const Protected = axios.create({ baseURL: `https://shahbasket.herokuapp.com`, withCredentials: true }) //instance of axios for working with protected APIS where accesstoken is required on each request
const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';

const NewApi = axios.create({ baseURL: `https://basketbackend.herokuapp.com` })
// import {useDispatch,useSelector} from 'react-redux'
//this function will check the validity of access token before calling any api 
Protected.interceptors.request.use(
        async (config) => {

                const accessToken = await AsyncStorage.getItem("accessToken");
                console.log(accessToken)
                if (accessToken) {
                        config.headers.authorization = `Bearer ${accessToken}`;
                }
                return config;
        },
        (error) => {
                console.log(error.response.data.error)
                Promise.reject(error);
        }


);

//if response have error means access token expired
// then this function will use to recreate the access
// token and call the previous query 

Protected.interceptors.response.use(
        (response) => {
                return response;
        },
        function (error) {
                // let dispatch =useDispatch()
                // const {user}=useSelector(state=>({...state}))
                const originalRequest = error.config;
                //   let refreshToken = Cookies.get("refresh");
                //   console.log(refreshToken)
                if (error.response.status === 401 && !originalRequest._retry) {
                        originalRequest._retry = true;
                        return Protected
                                .post(`/auth/refresh-token`, {}, { withCredentials: true })
                                .then((res) => {
                                        if (res.status === 200) {
                                                AsyncStorage.setItem("accessToken", res.data.accessToken);
                                                

                                                //name ---> jwt expired --> auth-refresh-token -->set it to AsyncStorage --> run originalRequest
                                                // dispatch({
                                                //   type:"ACESS_TOKEN",
                                                //   payload:res.data.accessToken
                                                // })
                                                console.log("Access token refreshed!");
                                                return Protected(originalRequest);
                                        }
                                });
                }
                return Promise.reject(error);
        }
);
//auth API's


export const AppSignUp = async (formdata) => await API.post('/auth/register', formdata)
export const AppLogIn = async (formdata) => await API.post('/auth/login', formdata)
export const AppGoogleLogIn = async (formdata) => await API.post('/auth/google', formdata)
export const AppMobileLogIn = async (formdata) => await API.post('/auth/mobile', formdata)
export const Applogout = async () => await Protected.get("/auth/logout")

//
export const PushProfileAddress = async (data) => await Protected.post("/user/add/address", data)
export const AppVerifyMobile = async (data) => await Protected.post("/user/update", data)
export const OrderInitate = async (data) => await Protected.post("/order/initate", data)
export const fetchProduct = async () => await API.get("/product/all")

export const fetchAllProduct = async()=> await NewApi.get("/api/v1/products")