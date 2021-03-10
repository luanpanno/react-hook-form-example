import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: 25px 0;
  background-color: ${(props) => props.theme.colors.background};

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 15px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.text};
  }
`;
