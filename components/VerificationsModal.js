import React from 'react'
import { Modal, StatusBar } from 'react-native'
import { Colors, InfoText, ModalContainer, ModalView, PageTitle } from './style'



const SuccessContent=({buttonHandler})=>{
    return(
        <ModalView>
            <StatusBar style="dark" />
            <Ionicons name="checkmark-circle" size={25} color={Colors.green} />
            <PageTitle 
                style={{
                    fontSize:25,
                    color:Colors.tertiary,
                    marginBottom:10
                }}>
                    verified

            </PageTitle>
            <InfoText>
                yah ! you successfully done dude
            </InfoText>
            <StyledButton onPress={()=>{}} style={{
                backgroundColor:Colors.green, flexDirection:"row"
            }}>
                <ButtonText>Continue to App </ButtonText>
                <Ionicons name="arrow-forward-circle" size={25} color={Colors.primary} />
            </StyledButton>
            <ResendTimer />
        </ModalView>
    )
}





export default function VerificationsModal() {
  return (
    <Modal 
        animationType='slide' 
        visible={modalvisible}
        transparent={true}
    >
        <ModalContainer>

        </ModalContainer>


    </Modal>
  )
}
