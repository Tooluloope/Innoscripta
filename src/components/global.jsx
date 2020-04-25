import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 980px){
        flex-direction: column;
    }

    .menu {
        flex-grow: 2;
       
         
    }
    .cart {
        flex-grow: 1;
        color: #000;
        background-color: #fafafa;
    }
  
`;
