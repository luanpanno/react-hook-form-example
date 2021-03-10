import styled from 'styled-components';

export const Container = styled.form`
  background-color: #fff;
  border-radius: 5px;
  padding: 25px;
  margin: 15px 0;
  min-width: 300px;
  width: 50%;
  max-width: 600px;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.1);

  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 25px;
  }
`;
