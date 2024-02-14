import {ButtonOutlied, ButtonIternStyleDiv, ButtonContainer} from './styles'

export const OutlinedButton = ({buttonText}) => {

    return(
        <ButtonContainer>
            <ButtonOutlied>
                <ButtonIternStyleDiv>{buttonText}</ButtonIternStyleDiv>
            </ButtonOutlied>
        </ButtonContainer>
        
    )
}