import styled from "styled-components";

export const FormWrapper = styled.form`
display: flex;
flex-direction: column;
flex-wrap: wrap;
max-width: 600px;
margin: auto;
border-radius: 30px;
background-color: rgba(0, 255, 255, 0.069);
padding: 50px;
`;

export const Button = styled.button`
border: none;
border-radius: 5px;
background-color: #2195f38c;
color: white;
font-size: large;
padding: 10px 20px;
cursor: pointer;
transition: 0.5s;
margin-top: 30px;

&:hover {
  background-color: #2196f3;
}
`;

export const Input = styled.input`
width: 65%;
height: 35px;
border-radius: 5px;
border: solid 1px black;
font-size: large;
margin-top: 8px;
`
export const LabelWrapper = styled.label`
margin-top: 8px;
font-size: large;
`;
