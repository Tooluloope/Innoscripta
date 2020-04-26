import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: green;
    height: 70px;
    width:100vw;
    display: flex;
    justify-content: space-between;
    color: #fff;
    align-items: center;

    h3 {
        padding-left: 30px;
    }
    a {
        padding-left: 15px;
        padding-right:15px;
        color: white;
        text-decoration: none;
    }
`
export const NavList = styled.ul` 
    display: flex;

    li {
        text-decoration:none;
        list-style:none;
        padding: 0 10px;
        cursor: pointer;
    }

    
`

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
export const Search = styled.input`
    width: 300px;
    border: 2px solid green;
    height: 35px;
    border-radius: 10px;
    outline: none;
    display: block;
    margin: 5px auto;
    font-size: 15px;
    padding-left: 15px;
`

export const Flex = styled.div`
    display: flex;
    width: 60%;
    height: 120px;
    margin: 10px auto;
    border: 1px solid green;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1200px){
        width: 80%

    }
    @media screen and (max-width: 538px){
        img {
            display: none;
        }

    }
    @media screen and (max-width: 440px){
        div h1 {
            font-size: 15px;
        }
        div p {
            display: none;
        }
        
    }

    img {
        flex: 0.5 0;
        max-width: 100px;
        margin-left: 10px;
        margin-right: 10px

    }
    div {
        flex: 1 ;
        margin: 0, 10px;

        p {
            margin: 0 20px 20px 5px ;
        }
        h3 {
            margin-left:5px;
            
        }
    }
    button {
        flex: 1;
        border: 1px solid green;
        outline: none;
        font-size: 20px;
        padding: 10px;
        background: transparent;
        margin-right: 10px;
        border-radius: 10px;
        max-width: 120px;
    }
    button:hover {
        color: white;
        background: green;
        border: 0px solid;
    }



`

export const Input = styled.input`
    width: 300px;
    border: 2px solid green;
    height: 35px;
    border-radius: 10px;
    outline: none;
    display: block;
    margin: 15px auto;
    font-size: 15px;
    padding-left: 15px;
`
export const Button = styled.button`

    height: 50px;
    border: 1px solid green;
    outline: none;
    font-size: 20px;
    padding: 10px;
    background: transparent;
    margin-right: 10px;
    border-radius: 10px;
   
    :hover {
    color: white;
    background: green;
    border: 0px solid;
}
`
export const Dismiss = styled.button`
    position: absolute;
    font-size: 14px;
    top: 5px;
    left: 5px;
    background: green;
    color: white;
    border-radius: 100%;
    border: 0px solid black;

`
