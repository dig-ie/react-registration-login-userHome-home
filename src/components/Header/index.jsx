import {LoginHeaderContainer, HeaderLogoContainer, ButtonsContainer} from './styles'
import {LogonButton} from '../LogonButton/index'
import DioLogo from '../../icons/DioLogo.png'
export const Header = ({OnClick1, OnClick2}) => {
return(
    <LoginHeaderContainer>
        <HeaderLogoContainer>
            <img src={DioLogo}/>
        </HeaderLogoContainer>
        <ButtonsContainer>
            <LogonButton OnClick={OnClick1} LogonButtonText='Entrar'></LogonButton>
            <LogonButton OnClick={OnClick2} LogonButtonText='Cadastrar'></LogonButton>
        </ButtonsContainer>
    </LoginHeaderContainer>
)
}