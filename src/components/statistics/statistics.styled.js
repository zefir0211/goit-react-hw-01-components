import styled from '@emotion/styled';

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

export const Container = styled.section`
    box-shadow: 0px 0px 15px 6px rgba(0,0,0,.2);
    margin: 0 auto;
    margin-bottom: 50px;
    
    width: 430px;
    border-radius: 8px;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 25px;
    text-align: center;
    text-transform: uppercase;
`;

export const StatList = styled.ul`
    display: flex;
    justify-content: center;

    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => getRandomColor()};

    width: 100%;
    height: 80px;

    box-shadow: 0px 0px 1px rgba(0,0,0,.2);
`;

export const Label = styled.span`
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
`;

export const Percentage = styled.span`
    color: #fff;
    font-size: 18px;
`;
