import React, { useEffect, useRef, useState } from 'react'
import { CodeInput, CodeInputContainer, CodeInputFocused, CodeInputSection, CodeInputText, HideenTextInput } from './style'

export default function CodeInputField({setPinReady,code,setCode,maxLength}) {
    const codeDigitsArray= new Array(maxLength).fill(0)
    //ref for text input 
    const textInputRef=useRef(null);
    const handleOnPress=()=>{
        setinputContainerIsFocused(true);
        textInputRef?.current?.focus();
    }
    //monitoring input focus
    const [inputContainerIsFocused, setinputContainerIsFocused] = useState(false)

    const handleOnBlur=()=>{
        setinputContainerIsFocused(false)
    }
    useEffect(() => {
      
    
      setPinReady(code.length===maxLength);
      return ()=> setPinReady(false);
    }, [code])
    
    const toCodeDigitInput=(value,index)=>{
        const emptyInputChar='';
        const digit =code[index] || emptyInputChar;
        //formating
        const isCurrentDigit=index===code.length;
        const  isCodeFull=code.length===code.maxLength;
        const isLastDigit =index===maxLength-1;

        const isDigitFocused= isCurrentDigit || (isLastDigit && isCodeFull);
        const StyledCodeInput= inputContainerIsFocused && isDigitFocused ? CodeInputFocused :CodeInput;
        return (
            <CodeInput>
                <CodeInputText>{digit}</CodeInputText>

            </CodeInput>
                
            
        )
    }
  return (
    <CodeInputSection>
        <CodeInputContainer onPress={handleOnPress}>
            {
                codeDigitsArray.map(toCodeDigitInput)
            }
        </CodeInputContainer>
        <HideenTextInput
            ref={textInputRef}
            value={code}
            onChangeText={setCode}
            onSubmitEditing={handleOnBlur}
            keyboardType="number-pad"
            returnKeyType="done"
            textContentType="oneTimeCode"
            maxLength={maxLength}

        />
    </CodeInputSection>
  )
}
