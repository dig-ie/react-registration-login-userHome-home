import {ButtonOutlied, ButtonIternStyleDiv, ButtonContainer} from './styles'

export const OutlinedButton = ({buttonText}) => {

    return(
        <>
        <ButtonIternStyleDiv type='button'>{buttonText}</ButtonIternStyleDiv>
        <ButtonOutlied>
        </ButtonOutlied>
        </>
            
    )
}