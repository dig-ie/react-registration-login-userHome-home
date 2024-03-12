import { Buttonn, ButtonOutlined } from './styles'
export const Button = ({ Type, ButtonText, OnClick }) => {

    return (
        <ButtonOutlined><Buttonn onClick={OnClick} type={ Type }>{ ButtonText }</Buttonn></ButtonOutlined>
        
    )
}