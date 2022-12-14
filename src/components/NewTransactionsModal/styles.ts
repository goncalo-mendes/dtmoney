import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color:${({ theme }) => theme.colors.textTitle};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  input {
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;
  
  border: 1px solid #d7d7d7;
  background:${({ theme }) => theme.colors.inputBackground};
  
  font-weight: 400;
  font-size: 1rem;
  
  &::placeholder {
    color:${({ theme }) => theme.colors.textBody};
  }
  & + input{
    margin-top: 1rem;
  }
}

  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color:${({ theme }) => theme.colors.green};
    color: #fff;
    border-radius: 0.25rem;
    border:0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s ease;

    &:hover {
    filter: brightness(0.8);
}
}

`
export const TransacitionTypeContainer = styled.div`
  margin: 1rem 0;
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#EE2E4D',
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background-color: ${(props) => props.isActive
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'};
  display:flex;
  align-items: center;
  justify-content: center;

  &:hover{
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img{
    width: 20px;
    heigh: 20px;
  }

  span{
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color:${({ theme }) => theme.colors.textTitle};
  }
`
