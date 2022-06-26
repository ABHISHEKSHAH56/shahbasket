import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper'
import { BottomHalf, ButtonText, Colors, EmphasizeText, InfoText, PageTitle, StyledButton, StyledContainer, TopHalf } from '../../components/style'
import {Octicons,Ionicons} from '@expo/vector-icons';

export default function otpVerification() {
    const [pinReady, setPinReady] = useState(false)
    const [code, setCode] = useState("")
    const MAX_CODE_LENGTH=4;
  return (
    <KeyboardAvoidingWrapper>
        <StyledContainer
            style={{
                alignItems:'center'
            }} >
                <TopHalf>
                <StatusBar style="dark"/>
                <Octicons name="lock" size={125} color={Colors.brand} />
                </TopHalf>
                <BottomHalf>
                    <PageTitle style={{fontSize:25}}>Account Verifications</PageTitle>
                    <InfoText>
                        Please Verify your email using the link sent to 
                        <EmphasizeText>{`abhishekshah4010@gmail.com`}</EmphasizeText>
                    </InfoText>
                    {/* <CodeInputField
                        setPinReady={setPinReady}
                        code={code}
                        setCode={setCode}
                        maxLength={MAX_CODE_LENGTH}

                    /> */}

                    <StyledButton onPress={()=>{}} style={{
                        backgroundColor:Colors.green, flexDirection:"row"
                    }}>
                        <ButtonText>Verify</ButtonText>
                        <Ionicons name="checkmark-circle" size={25} color={Colors.primary} />
                    </StyledButton>
                    
                    


                </BottomHalf>

        </StyledContainer>
    </KeyboardAvoidingWrapper>
  )
}
