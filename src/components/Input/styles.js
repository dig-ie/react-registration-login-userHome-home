import {styled} from 'styled-components';

export const InputContainer = styled.div`
position:relative;

width: 100%;
height: 100%;
/* width: 275px;
height: 20px; */

color:white;
margin-bottom: 1rem;
`
export const Inputt = styled.input`
width: 100%;
height: 100%;
border: none;
border-bottom: solid 1px #3B3450;
background-color: transparent;
padding-left: 1rem;
outline:none;
color: red;
font-size: 14px;
`

export const ImgDiv = styled.div`
position:absolute;

width: 9px;
height: 9px;

left: 5px;
top: 37%;
transform: translateY(-50%);
`

export const Img = styled.img`

width:100%;
height:auto;
`