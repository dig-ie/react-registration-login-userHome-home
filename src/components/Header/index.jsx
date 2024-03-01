import {LoginHeaderContainer, HeaderLogoContainer, ButtonsContainer} from './styles'
import {LogonButton} from '../LogonButton/index'
import DioLogo from '../../icons/DioLogo.png'
export const Header = ({OnClick1, OnClick2, Text1, Text2}) => {
return(
    <LoginHeaderContainer>
        <HeaderLogoContainer>
            <img src={DioLogo}/>
        </HeaderLogoContainer>
        <ButtonsContainer>
            <LogonButton OnClick={OnClick1} LogonButtonText={Text1}></LogonButton>
            <LogonButton OnClick={OnClick2} LogonButtonText={Text2}></LogonButton>
        </ButtonsContainer>
    </LoginHeaderContainer>
)
}