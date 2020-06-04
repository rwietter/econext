import styled from 'styled-components';
import Background from '../../static/site/assets/home-background.svg';
import { Link } from 'react-router-dom';

const Home = styled.div`
  height: 100vh;
  background: url(${Background}) no-repeat 39.5rem bottom;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 9em) {
    align-items: center;
    text-align: center;
  }
`;

const Header = styled.header`
  margin: 3rem 0 0;

  @media (max-width: 9em) {
    margin: 2rem auto 0;
  }
`;

const Main = styled.main`
  flex: 1;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 9em) {
    align-items: center;
  }
`;

const H1 = styled.h1`
  font-size: 54px;
  color: #322153;

  @media (max-width: 9em) {
    font-size: 2rem;
  }
`;

const P = styled.p`
  font-size: 1.3rem;
  margin-top: 1.5rem;
  line-height: 4vh;

  @media (max-width: 9em) {
    font-size: 1rem;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  max-width: 22rem;
  height: 4rem;
  background: #34cb79;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-decoration: none;
  margin-top: 10vh;
  -webkit-border-radius: 0.3rem;
  -moz-border-radius: 0.3rem;
  -ms-border-radius: 0.3rem;
  -o-border-radius: 0.3rem;

  &:hover {
    background: #2fb86e;
  }
`;

const Span = styled.span`
  display: block;
  background: rgba(0, 0, 0, 0.08);
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
`;

const Svg = styled.svg`
  color: #fff;
  width: 1.25rem;
  height: 1.25rem;
`;

const Strong = styled.strong`
  flex: 1;
  text-align: center;
  text-decoration: none;
  -webkit-text-decoration: none;
  color: #fff;
`;

export { StyledLink, Home, Content, Header, H1, Main, P, Span, Svg, Strong };
