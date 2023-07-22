import styled from '@emotion/styled';

export const Container = styled.table`
    border-radius: 8px;
    box-shadow: 0px 0px 15px 6px rgba(0,0,0,.2);

    border-collapse: collapse;
    margin: 0 auto;
    margin-bottom: 20px;

    width: 700px;
`;

export const ContainerHead = styled.thead`
    background-color: #f5f5f5;
    font-size: 14px;
    text-transform: uppercase;
    background-color: dodgerblue;
`;

export const ContainerHeadList = styled.tr`
   
`;

export const ContainerHeadItem = styled.th`
box-shadow: 0px -1px 1px rgba(0,0,0,.2);
    padding: 15px 20px 15px 20px;
    text-align: center;
    color: #ffffffc4;
`;

export const ContainerInfo = styled.tbody`
   
`;

export const ContainerInfoList = styled.tr`
    border-bottom: 1px solid #ccc;
    transition: background-color .2s ease;

    &:nth-of-type(odd) {
        background-color: #fff;
    }

    &:nth-of-type(even) {
        background-color: #edeaea;
    }
`;

export const ContainerInfoItem = styled.td`
    box-shadow: 0px -1px 1px rgba(0,0,0,.2);
    font-size: 16px;
    padding: 15px 20px 15px 20px;
    text-align: center;
    text-transform: capitalize;
`;