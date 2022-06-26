import React from 'react'
import { View } from 'react-native'
import { EmphasizeText, InfoText, InlineGroup, TextLink, TextLinkContent } from './style'

export default function ResendTimer() {
  return (
    <View>
        <InlineGroup>
            <InfoText>Didn't receive the email </InfoText>
            <TextLink onPress={()=>{}}>
                <TextLinkContent style={{textDecorationLine:'underline'}}>Resend</TextLinkContent>
            </TextLink>
        </InlineGroup>
        <InfoText>
            in <EmphasizeText>{`20`}</EmphasizeText> Seconds
        </InfoText>

            </View>
    
  )
}
