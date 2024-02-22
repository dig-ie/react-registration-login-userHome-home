import {styled} from 'styled-components'

export const LoginBoxContainer = styled.div`
padding: 4px 0 4px 0;

width: 100%;
min-height: 250px;
background-color: #1E192C;


display: flex;
flex-direction: column;
justify-content: center;

`
export const LoginBoxTitle = styled.h1`
text-align: left;
font-size: 32px;
color: white;

margin-bottom: 0.75rem;
`
export const LoginBoxSubTitle = styled.h2`
text-align: left;
font-size: 18px;
color: white;

margin-bottom: 0.75rem; 
`
export const Form = styled.form`

display: flex;
flex-direction: column;
width: 100%;
min-height: 70px;
`
export const ButtonContainer = styled.div`

width:100%;
height:41px;
`

export const BottomTextsContainer = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
justify-self: center;
`
export const ForgottPasswordText = styled.h3`
text-align: left;
font-size: 14px;
color:#E5E044;
`
export const CrateAccountText = styled.h3`
text-align: right;
font-size: 14px;
color:#23DD7A;
`