import styled from '@emotion/styled';

export const Section = styled.div`
    border-bottom: 3px solid gray;

    & p {
        font-weight: 500;
        font-size: 20px;
    }

    & a {
        text-decoration: none;
        font-weight: 500;

        :hover,
        :focus {
            color: #110c2b;
        }
    }       
`;