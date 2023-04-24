import styled from '@emotion/styled'; 


export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  padding: 10px 0;
  list-style: none;
`;

export const MovieWrapper = styled.li`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }

  & img {
    width: 197px;
  }
`;

export const MovieName = styled.h5`
  padding: 4px;
  margin-top: 0;
  margin-bottom: 0;
  color: black;
`;