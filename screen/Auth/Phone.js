import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

// formik
import { Formik } from 'formik';

import {
  StyledContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledInputLabel,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  InnerContainer,
  ButtonText,
  MsgBox,
  Colors,
} from '../../components/style';
import { View, ActivityIndicator, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

//colors
const { darkLight, brand, primary } = Colors;

// icon
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';

// keyboard avoiding view
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

const PhoneLogin = ({ navigation }) => {
  

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('../../assets/logo.png')} />
          <PageTitle>Shah Basket</PageTitle>
          <SubTitle>Account PhoneLogin</SubTitle>
           <StyledFormArea> 
            <MyTextInput
                label={"Mobile "}
                placeholder="Mobile Number"
                keyboardType="phone-pad"
                autoCompleteType="off"
            /> 
            <MsgBox></MsgBox> 
            <StyledButton>
                <ButtonText>Proceed</ButtonText>
            </StyledButton>         
           
            </StyledFormArea>            
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default PhoneLogin;

const MyTextInput = ({ label,...props }) => {
    return (
      <View>
        <LeftIcon>
          <Text style={{fontWeight:"bold"}}>+91</Text>
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
        
      </View>
    );
  };
  