import {InputStyledContainer, InputStyled, ImgDiv, StyledImg } from './styles'
export const StyledInput = ({InputType, InputPlaceHolder, InputIcon}) => {

    return(
        <>
        <InputStyledContainer>
            <InputStyled type={InputType} placeholder={InputPlaceHolder}></InputStyled>
            <ImgDiv>
                <StyledImg src={InputIcon}/>
            </ImgDiv>
        </InputStyledContainer>
        </>
    )
}