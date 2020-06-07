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
  margin-right: 16px;
  color: ${({theme}) => theme.primaryColor};
`

export const form = styled.form`
  margin: 80px auto;
  padding: 64px;
  max-width: 730px;
  background: #fff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`

export const h1 = styled.h1`
  font-size: 36px;
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
`

export const span = styled.span`
  font-size: 14px;
  font-weight: normal;
  color: var(--text-color);
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
  background: ${({ theme }) => theme.body};
  border-radius: 0.5rem;
  border: 0;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor};

  &::placeholder{
    color: #a0a0b2;
  }
`;

export const select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  flex: 1;
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  color: #6c6c80;
`

export const label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
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
  padding: 0 20px 0 60px;

  &:hover {
    background: #2fb86e;
  }
`

export const buttonIcon = styled(FiCheck) `
  width: 50px;
  height: 56px;
  background: ${(props) => props.theme.primaryColor};
  border-radius: 8px;
  outline: none;
  color: #fff;
  font-weight: bold;
  border: 0;
  align-self: flex-end;
  margin-top: 40px;
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
  background: #f5f5f5;
  border: 2px solid #f5f5f5;
  height: 180px;
  border-radius: 8px;
  padding: 32px 24px 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  text-align: center;

  cursor: pointer;

  &::selection{
    background: #e1faec;
    border: 2px solid #34cb79;
  }
  ${({ className }) => className && `
    background: #e1faec;
    border: 2px solid #34cb79;
  `}
`

export const spanGrid = styled.span`
  flex: 1;
  margin-top: 12px;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.titleColor};
`
