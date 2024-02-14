import {LoginHeaderContainer, HeaderLogoContainer, ButtonsContainer} from './styles'
import {LogonButton} from '../LogonButton/index'
import {DioLogo} from '../../icons/DioLogo.jsx'
export const Header = () => {
return(
    <LoginHeaderContainer>
        <HeaderLogoContainer>
            <DioLogo/>
        </HeaderLogoContainer>
        <ButtonsContainer>
            <LogonButton LogonButtonText='Entrar'></LogonButton>
            <LogonButton LogonButtonText='Cadastrar'></LogonButton>
        </ButtonsContainer>
    </LoginHeaderContainer>
)
}