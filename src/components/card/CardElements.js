import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';

export const CardContainer = styled.div`
  display: flex;
  height: 100%;
  background: ${({ theme }) => theme.background.card};
  border-radius: 0.7em;
  overflow: hidden;

  @media (max-width: ${Breakpoints.mobile}) {
    flex-direction: column-reverse;
  }
`;

export const CardImageWrapper = styled.section`
  background-color: ${({ theme }) => theme.accent};
  width: 50%;
  @media (max-width: ${Breakpoints.mobile}) {
    width: 100%;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: 75%;
  mix-blend-mode: multiply;
`;

export const CardContent = styled.section`
  font-family: 'Inter', cursive;
  max-width: 32%;
  margin: 0 auto;
  padding-bottom: 1em;

  @media (max-width: ${Breakpoints.mobile}) {
    max-width: 85%;
    text-align: center;
    padding-bottom: 2em;
  }
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.accent};
`;

export const Header = styled.div`
  font-weight: bold;
  font-size: 1.8em;

  margin-top: 2.7em;

  color: ${({ theme }) => theme.white.header};

  @media (max-width: ${Breakpoints.mobile}) {
    margin-top: 1em;
  }
`;

export const Description = styled.div`
  font-size: 0.9em;
  margin-top: 2.4em;
  color: ${({ theme }) => theme.white.description};
`;

export const DetailsContainer = styled.div`
  margin-top: 5.4em;
  display: grid;
  grid-template-columns: 33% 33% 33%;

  @media (max-width: ${Breakpoints.mobile}) {
    margin-top: 2em;
    grid-template-columns: 100%;
    gap: 1.2em;
  }
`;

export const Detail = styled.div`
  font-size: 1.4em;
`;

export const DetailTitle = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.white.paragraph};

  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.accent};
  }
`;

export const DetailSubtitle = styled.div`
  color: ${({ theme }) => theme.white.description};
  font-size: 0.53em;
  text-transform: uppercase;
`;
