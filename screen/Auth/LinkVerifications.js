import { StatusBar } from "expo-status-bar"
import { BottomHalf, ButtonText, Colors, EmphasizeText, IconBg, InfoText, InlineGroup, PageTitle, StyledButton, StyledContainer, TextLink, TextLinkContent, TopHalf } from "../../components/style"
import {Octicons,Ionicons} from '@expo/vector-icons';
import ResendTimer from "../../components/ResendTimer";

const Verification =()=>{
    // const [resendingEmail, setResendingEmail] = useState(false);
    // const [resendStatus, setResendStatus] = useState('sent');
    // //resend timer
    // const [timeLeft, setTimeLeft] = useState(null)
    // const [targetTime, setTargetTime] = useState(null)
    // const [activateResend, setActivateResend] = useState(false)
    // let resendTimeInterval;
    // const calculateTimeLeft=(finalTime)=>{
    //     const difference= finalTime- +new Date();
    //     if(difference>0)
    //     {
    //         setTimeLeft(Math.round(difference/1000));
    //     }else{
    //         setTimeLeft(null)
    //         clearInterval(resendTimeInterval);
    //         setActivateResend(true)
    //     }
    // }
    // const TriggerTimer=(targettime=30)=>{
    //     setTargetTime(targettime)
    //     setActivateResend(false);
    //     const finalTime=+new Date()+targettime*1000;
    //     resendTimeInterval=setInterval(()=>(
    //         calculateTimeLeft(finalTime),1000
    //     ))
    // }
    return <StyledContainer style={{
        alignItems:'center'
    }}>
        <TopHalf>
            <IconBg>
                <StatusBar style="dark"/>
                <Octicons name="mail" size={125} color={Colors.brand} />
            </IconBg>
        </TopHalf>
        <BottomHalf>
            <PageTitle style={{fontSize:25}} >Account Verification</PageTitle>
            <InfoText>
                Please Verify your email using the link sent to  
                <EmphasizeText>{` abhishekshah4010@gmail.com`}</EmphasizeText>
            </InfoText>
            <StyledButton onPress={()=>{}} style={{
                backgroundColor:Colors.green, flexDirection:"row"
            }}>
                <ButtonText>Proceed</ButtonText>
                <Ionicons name="arrow-forward-circle" size={25} color={Colors.primary} />
            </StyledButton>
            <ResendTimer />
            

        </BottomHalf>
        
    </StyledContainer>
}
export default Verification;