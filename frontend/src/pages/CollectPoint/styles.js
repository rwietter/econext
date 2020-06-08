import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';
import { Map } from 'react-leaflet';

export const CreatePointDiv = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`

export const Header = styled.header`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const link = styled(Link)`
  color: ${({theme}) => theme.titleColor};
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const fiArrowLeft = styled(FiArrowLeft)`
  margin-right: 1rem;
  color: ${({theme}) => theme.primaryColor};
`

export const form = styled.form`
  margin: 80px auto;
  padding: 64px;
  max-width: 730px;
  background: ${({ theme }) => theme.form};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`

export const h1 = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.textForm}
`

export const fieldset = styled.fieldset`
  margin-top: 64px;
  min-inline-size: auto;
  border: 0;
`

export const legend = styled.legend`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`

export const h2 = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.textForm}
`

export const span = styled.span`
  font-size: 14px;
  font-weight: normal;
  color: ${({ theme }) => theme.textForm};
`

export const field = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  & + & {
    margin-left: 2rem;
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const fieldGroup = styled.div`
  flex: 1;
  display: flex;
`

export const input = styled.input.attrs(({ name }) => ({
  type: name === 'name' ? 'name' : name === 'email' ? 'email' : 'number'
}))`
  flex: 1;
  background: ${({ theme }) => theme.inputBackground};
  border-radius: 0.5rem;
  border: 0;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.inputText};

  &::placeholder{
    color: ${({ theme }) => theme.select};
  }
`;

export const select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  flex: 1;
  background: ${({ theme }) => theme.inputBackground};
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  outline: 0ch;
  font-size: 16px;
  color: ${({ theme }) => theme.inputText};
`

export const label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.textForm};
`

export const leafletMap = styled(Map)`
  width: 100%;
  height: 350px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const button = styled.button`
  width: 290px;
  height: 56px;
  background: ${(props) => props.theme.primaryColor};
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  outline: none;
  font-size: 16px;
  border: 0;
  align-self: flex-end;
  margin-top: 40px;
  transition: background-color 0.2s;
  cursor: pointer;
  padding: 0 1.25rem 0 3.5rem;

  &:hover {
    background: #2fb86e;
  }
`

export const buttonIcon = styled(FiCheck) `
  width: 55px;
  height: 50px;
  background: ${(props) => props.theme.primaryColor};
  border-radius: 0.5rem;
  outline: none;
  color: #fff;
  font-weight: bold;
  border: 0;
  align-self: flex-end;
  margin-top: 2.5rem;
  cursor: default;
  position: absolute;
`

export const ulGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;
`

export const liGrid = styled.li`
  background: ${({ theme }) => theme.inputBackground};
  border: 2px ${({ theme }) => theme.inputText};
  height: 180px;
  border-radius: 8px;
  padding: 32px 24px 16px;
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
