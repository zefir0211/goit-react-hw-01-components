import styled from '@emotion/styled';

export const Container = styled.ul`
    display: flex;
    flex-direction: column;

    padding: 0;
    margin: 0 auto;
    margin-bottom: 50px;
    list-style: none;

    width: 430px;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;

    box-shadow: 0px 0px 15px 6px rgba(0,0,0,.2);

    border-radius: 8px;

    padding: 5px 0px 5px 20px;
    margin-bottom: 20px;
`;

export const Status = styled.span`
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    padding: 5px 10px;
    text-transform: uppercase;
    color: #000;
    background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};;

    margin-right: 20px;
    
`;

export const Img = styled.img`
    width: 100px;
    border-radius: 5px;
    background: #0000002b;

    margin-right: 20px;
`;

export const Name = styled.p`
    font-size: 30px;
    font-weight: 500;

    margin: 0;
`;