import styled from 'styled-components';

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 40px;
    `

export const DropOptions = styled.select`
    width: 420px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 15px;
    height: 55px;
    border: 2px solid black;
    border-radius: 60px;
    padding-left:60px;
    font-size: 16px;
    font-weight:bold;
    background-image: url(${props => props.icon});
    background-size: 6%;
    background-repeat: no-repeat;
    background-position-x: 5% ;
    background-position-y:50%;
    &&:focus{
      border-color: #789D55;
    }   
`