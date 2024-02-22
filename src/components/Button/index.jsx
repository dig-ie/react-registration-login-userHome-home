import { Buttonn, ButtonOutlined } from './styles'
export const Button = ({ Type, ButtonText }) => {

    return (
        <ButtonOutlined><Buttonn type={ Type }>{ ButtonText }</Buttonn></ButtonOutlined>
        
    )
}