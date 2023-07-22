import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 15px 6px rgba(0,0,0,.2);
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 50px;
    width: 430px;
    padding-top: 20px;
`;

export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Img = styled.img`
    border: 4px solid #fff;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0,0,0,.1);
    height: 150px;
    width: 150px;

    margin-bottom: 50px;
`;

export const Name = styled.p`
    font-size: 25px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 15px;
`;

export const Tag = styled.p`
    color: #00000075;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    margin-bottom: 15px;
`;

export const Location = styled.p`
    color: #00000075;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    margin-bottom: 50px;
`;

export const Statistic = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;

    width: 100%;

    padding: 0;
    margin: 0;
`;

export const StatisticList = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px -1px 1px rgba(0,0,0,.2);
    gap: 6px;
    background-color: #00000008;
    padding: 5px;
    text-align: center;
    width: 100%;
    height: 100px;
`;

export const Label = styled.span`
    color: #010101;
    font-size: 16px;
    font-weight: 700;
`;

export const Quantity = styled.span`
    color: #333;
    font-size: 18px;
`;