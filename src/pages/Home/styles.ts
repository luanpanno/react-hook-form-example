import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};

  h1 {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 15px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.text};
  }
`;
