import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Map } from 'react-leaflet';

export const CreatePointDiv = styled.div`
  width: 100%;
  max-width: 58rem;
  margin: 0 auto;
`

export const Header = styled.header`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2rem;
  flex-wrap: wrap;
`

export const link = styled(Link)`
  color: ${({theme}) => theme.titleColor};
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  @media(max-width: 575px){
    &:nth-child(2){
      margin-top: 32px;
    }
  }
`

export const fiArrowLeft = styled(FiArrowLeft)`
  margin-right: 1rem;
  color: ${({theme}) => theme.primaryColor};
`

export const form = styled.form`
  margin: 5rem auto;
  padding: 4rem;
  max-width: 40rem;
  background: ${({ theme }) => theme.form};
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;

  @media(max-width: 683px){
    padding: 2rem;
  }
`

export const h1 = styled.h1`
  font-size: 2rem;
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.textForm}
`

export const fieldset = styled.fieldset`
  margin-top: 3rem;
  border: 0;
`

export const legend = styled.legend`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`

export const h2 = styled.h2`
  font-size: 1.5rem;
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.textForm}
`

export const span = styled.span`
  font-size: 0.875rem;
  font-weight: normal;
  color: ${({ theme }) => theme.textForm};
`

export const field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  & + & {
    margin-left: 2rem;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media(max-width: 613px){
    & + & {
      margin-left: 0;
    }
  }
`;

export const fieldGroup = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`

export const input = styled.input.attrs(({ name }) => ({
  type: name === 'name' ? 'name' : name === 'email' ? 'email' : 'number'
}))`
  flex: 1;
  background: ${({ theme }) => theme.inputBackground};
  border-radius: 0.5rem;
  border: 0;
  padding: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.inputText};

  &::placeholder{
    color: ${({ theme }) => theme.select};
  }

  @media(max-width: 612px){
    & + & {
      margin-left: 1rem;
    }
  }

  @media(min-width: 467px) and (max-width: 614px){
    margin: 5px;
  }
`;

export const select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  flex: 1;
  background: ${({ theme }) => theme.inputBackground};
  border-radius: 0.5rem;
  border: 0;
  padding: 1rem 1.5rem;
  outline: 0ch;
  font-size: 1rem;
  color: ${({ theme }) => theme.inputText};
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-weight: 400;
`

export const label = styled.label`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textForm};
`

export const leafletMap = styled(Map)`
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const button = styled.button`
  width: 70%;
  height: 4rem;
  background: ${(props) => props.theme.primaryColor};
  border-radius: 0.5rem;
  color: #fff;
  font-weight: bold;
  outline: none;
  font-size: 1rem;
  border: 0;
  align-self: flex-end;
  margin-top: 3rem;
  transition: background-color 0.2s;
  cursor: pointer;
  padding: 0 1.25rem 0 3.5rem;
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-weight: 800;

  &:hover {
    background: #2fb86e;
  }

  @media(max-width: 452px){
    width: 100%
  }
`

export const buttonIcon = styled(FiArrowRight) `
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  outline: none;
  color: #fff;
  font-weight: bold;
  border: 0;
  align-self: flex-end;
  margin: 3.7rem 0 0 0.5rem;
  cursor: default;
  position: absolute;
`

export const ulGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  list-style: none;

  @media(max-width: 719px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 450px){
    grid-template-columns: repeat(1, 1fr);
  }
`

export const liGrid = styled.li`
  background: ${({ theme }) => theme.inputBackground};
  border: 0.125rem ${({ theme }) => theme.inputText};
  height: 11.25rem;
  border-radius: 8px;
  padding: 2rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;

  ${(props) => props.className === 'selected' ? `
    border: 2px solid #34cb79;
  ` : ''
  }
`

export const spanGrid = styled.span`
  flex: 1;
  margin-top: 0.7rem;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.titleColor};
`
