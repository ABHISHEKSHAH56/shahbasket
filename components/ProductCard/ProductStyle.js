import styled from "styled-components/native"
import { Colors } from "../style";

export const ProductsWrapper=styled.View`
        flex-direction: row;
        elevation: 4;
        border-radius: 20px;
        background-color: ${Colors.primary};
        margin-horizontal: 5px;
        shadow-color: ${Colors.gray};        
        justify-content: space-between;
        margin-bottom:20px;
        shadow-radius: 4px;
        shadow-opacity: 0.1;
`;

//card01
export const PercentageWrapper=styled.View`
    background-color: ${Colors.brand};
    border-radius: 3px;
    border-top-right-radius: 3px;
    border-top-Left-radius: 15px;
    border-bottom-Left-radius: 13px;
    justify-content: center;
`;
export const PercentageText=styled.Text`
        color: white;
        font-size: 10;
        font-weight: 700;

`;
export const Card01Detailswrapper=styled.View`
        flex: 2;
        justify-content: center;
        margin-horizontal: 5px;
        padding-horizontal: 5px;
`;
export const Card01ImageWrapper=styled.View`
    flex: 1;
    background-color: white;
    border-radius: 10px;
    align-items: center;
`;
export const Card01Image=styled.Image`
    height: 80px; 
    width: 80px; 
    align-self: center
`;
export const CartImage=styled.Image`
    height: 50px; 
    width: 50px; 
    align-self: center;
`;

export const AddCartWrapper=styled.View`
        flex-direction: row;
        height: 25px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        margin-bottom: 4px;
`;
export const AddCartButtonwrapper=styled.TouchableOpacity`
        height: 18px;
        width: 18px;
        border-radius: 10px;
        justify-content: center;
        align-items: center

`;
export const AddcartDispaywrapper=styled.View`
    background-color: ${Colors.lightGray2};
    width: 50px;
    height: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-horizontal: 3px;

`;
//card02
export const Card02ImageWrapper=styled.View`
        flex: 1.2;          
        border-radius: 10px;
        margin-left: 5px;
        margin-vertical: 5px;

`;
export const Card02DetailsWrapper=styled.View`
        flex: 2; 
        justify-content: center; 
        margin-horizontal: 10px;
`;
export const Card02AddCartWrapper=styled.View`
        flex: 2;
        justify-content: center;

`;