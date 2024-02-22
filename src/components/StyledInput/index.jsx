import {InputStyledContainer, Input, ImgDiv, StyledImg } from './styles'
import { TextField } from "@material-ui/core"
import { useController, useForm } from "react-hook-form"
export const StyledInput = ({control, name, Value, OnChange, InputType, InputPlaceHolder, InputIcon}) => {

    const {
        field,
        fieldState: { invalid, isTouched, isDirty },
        formState: { touchedFields, dirtyFields },
      } = useController({
        name,
        control,
        rules: { required: true },
      })

    return(
<>
            <TextField 
            onChange={field.onChange} // send value to hook form
            onBlur={field.onBlur} // notify when input is touched/blur
            value={field.value} // input value
            name={field.name} // send down the input name
            inputRef={field.ref} // send input ref, so we can focus on input when error appear
            type={InputType} placeholder={InputPlaceHolder}/>
            <ImgDiv>
                <StyledImg src={InputIcon}/>
            </ImgDiv>    
            </>     
    )
}