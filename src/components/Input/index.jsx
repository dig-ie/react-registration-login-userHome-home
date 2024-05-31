import { InputContainer, Inputt, ImgDiv, Img } from "./styles";
import { useController } from "react-hook-form";

export const Input = ({ control, name, inputIcon, PlaceHolder, InputType }) => {
  const {
    field,
    //fieldState: { invalid, isTouched, isDirty },
    //formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
  });
  return (
    <InputContainer>
      <Inputt
        type={InputType}
        placeholder={PlaceHolder}
        onChange={field.onChange} // send value to hook form
        onBlur={field.onBlur} // notify when input is touched/blur
        value={field.value} // input value
        name={field.name} // send down the input name
        inputref={field.ref} // send input ref, so we can focus on input when error appear
      />
      <ImgDiv>
        <Img src={inputIcon} />
      </ImgDiv>
    </InputContainer>
  );
};
