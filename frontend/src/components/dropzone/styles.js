import styled from 'styled-components'

export const Dropzone = styled.div`
  height: 300px;
  background: ${({theme}) => theme.dropzone};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  outline: 0;
`;

export const P = styled.p`
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  border-radius: 10px;
  border: 1px dashed ${({theme}) => theme.link};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.textForm};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Svg = styled.svg`
  color: #4ecb79;
  width: 2rem;
  height: 2rem;
  margin-bottom: 2rem;
`;
