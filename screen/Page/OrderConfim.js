import { StatusBar } from "expo-status-bar"
import { BottomHalf, ButtonText, Colors, EmphasizeText, IconBg, InfoText, InlineGroup, PageTitle, StyledButton, StyledContainer, TextLink, TextLinkContent, TopHalf } from "../../components/style"
import {Octicons,Ionicons} from '@expo/vector-icons';
import ResendTimer from "../../components/ResendTimer";

const OrderSuccess =({navigation})=>{
    
    return <StyledContainer style={{
        alignItems:'center'
    }}>
        <TopHalf>
            <IconBg>
                <StatusBar style="dark"/>
                <Octicons name='check-circle' size={125} color={Colors.green} />
            </IconBg>
        </TopHalf>
        <BottomHalf>
            <PageTitle style={{fontSize:25}} >Order Confirm</PageTitle>
            <InfoText>
                Your Order number #12Ahbgs001 has been ordered                  
            </InfoText>
            <InfoText>
            <EmphasizeText>Order will delivery 2-3 days </EmphasizeText>
            </InfoText>
            
            
            <StyledButton onPress={()=>navigation.navigate('home')} style={{
                backgroundColor:Colors.green, flexDirection:"row"
            }}>
                <ButtonText>Home </ButtonText>
                <Ionicons name="arrow-forward-circle" size={25} color={Colors.primary} />
            </StyledButton>
            <TextLink onPress={()=>navigation.navigate('trackOrder')}>
                <TextLinkContent style={{textDecorationLine:'underline'}}>Track Your Order</TextLinkContent>
            </TextLink>
            

        </BottomHalf>
        
    </StyledContainer>
}
export default OrderSuccess;