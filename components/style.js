import styled from "styled-components/native"
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");




export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

// colors
export const Colors = {
  primary: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand: '#6D28D9',
  green: '#10B981',
  red: '#EF4444',
  lightGreen:'rgba(16,185,129,0.1)',
  gray:'#6B7280',
  alt: "#1A202C",
  placeholder: "#CBD5E0",
  black: "#0f0f0f",
  orange: "#ff8651",
  gray2: "#BBBDC1",
  gray3: '#CFD0D7',
  lightGray1: "#DDDDDD",
  lightGray2: "#F5F5F8",
  white2: "#FBFBFB",
  white: '#FFFFFF',
  black: "#000000",
  lightOrange: "#FFA133",
  lightOrange2: "#FDDED4",
  lightOrange3: '#FFD9AD',
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 10px;
  padding-top: ${StatusBarHeight + 15}px;
  background-color: ${Colors.primary};
`;

export const InnerContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const AvatarSmall = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border-width: 1px;
  border-color: ${secondary};
  margin:4px;
`;

export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${Colors.brand};
  padding: 10px;
  ${(props) =>
    props.welcome &&
    `
    font-size: 35px;
  `}
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  text-align:center;  
  font-weight: bold;
  color: ${tertiary};
  ${(props) =>
    props.welcome &&
    `
    margin-bottom: 5px;
    font-weight: normal;
  `}
`;

export const StyledTextInput = styled.TextInput`
  background-color: #FBFBFE
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 15px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: #000000;
  font-weight:bold;
  elevation:1.5;
  border-color: grey;
  border-width:1px;
`;
export const StyledAddressTextInput = styled.TextInput`
  background-color: #FBFBFE
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
  height: 40px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: #000000;
  font-weight:bold;
  elevation:1.5;
  border-color: grey;
  border-width:1px;
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
  font-weight:bold;
`;
export const StyledInputLabelAddress = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
  font-weight:bold;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 30px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
  ${(props) =>
    props.google == true &&
    `
    background-color: ${green};
    flex-direction: row;
    justify-content: center;
  `}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
  ${(props) =>
    props.google == true &&
    `
    color: ${primary};
    padding: 5px;
  `}
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${props => props.type == "SUCCESS" ? green : red};
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const StyledFormArea = styled.View`
  width: 95%;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`;

//verification componments

export const TopHalf =styled.View`
    flex:1;
    justify-content:center;
    padding:20px;
`;

export const IconBg=styled.View`
    width:250px;
    height:250px;
    background-color:${Colors.lightGreen};
    border-radius:250px;
    justify-content:center;
    align-items:center;
`;
export const BottomHalf=styled(TopHalf)`
    justify-content:space-around;
`;
export const InfoText=styled.Text`
  color:${Colors.gray};
  font-size:15px;
`;
export const EmphasizeText=styled.Text`
    font-weight:bold;
`
export const InlineGroup=styled.View`
    flex-direction:row;
    padding:10px;
    justify-content:center;
    align-items:center;
`
//for pin
export const CodeInputSection=styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
    margin-vertical:30px;
`;

export const HideenTextInput=styled.TextInput`
    position:absolute;
    width:1px;
    height:1px;
    opacity:0

`;

export const CodeInputContainer=styled.Pressable`
    width:70%;
    flex-direction:row;
    justify-content:spcae-between;
`;

export const CodeInput=styled.View`
    border-color:${Colors.lightGreen};
    min-width:15%;
    border-width:2px;
    border-radius:5px;
    padding:12px;
`
export const CodeInputText=styled.Text`
    font-size:22px;
    font-weight:bold;
    text-align:center;
    color:${Colors.brand};
`;

export const CodeInputFocused=styled(CodeInput)`
    border-color:${Colors.green}
`
export const  HeaderContainer=styled.View`
      flex-direction:row;
      justify-content:space-around;
      align-items:center;
      margin-top:20px;
      margin-bottom:5px;
      margin-horizontal:10px;
`;
//modal container

export const ModalContainer=styled(StyledContainer)`
    justify-content:center;
    align-items:center;
    background-color:rgba(0,0,0,0.7);
`;

export const ModalView= styled.View`
    margin:20px;
    background-color:white;
    border-radius:20px;
    padding:35px;
    align-items:center;
    elevation:5;
    shadow-color:#000;
    shadow-offset:0px 2px;
    shadow-opacity:0.25;
    shadow-radius:4px;
    width:100%;
`;
export const TableHeader=styled.View`
      flexDirection:row;
      backgroundColor:${Colors.white};
`;