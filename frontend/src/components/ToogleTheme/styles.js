import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.toggle};
  border: none;
  outline: 0;
  border-radius: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 0.2rem;
  position: relative;
  width: 3rem;
  height: 1.2rem;
  img {
    height: 1.2rem;
    width: 1rem;
    transition: all 0.4s linear;
    /* sun */
    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
    }
    /* moon */
    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
    }
  }
  @media (max-width: 1000px) {
    width: 2.4rem;
    height: 0.8rem;
    img {
      height: 0.8rem;
      width: 0.7rem;
    }
  }
`;

export { ToggleContainer };
