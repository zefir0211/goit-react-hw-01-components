import PropTypes from 'prop-types';
import { Container, ContainerHead, ContainerHeadList, ContainerHeadItem, ContainerInfo, ContainerInfoList, ContainerInfoItem } from './transactionHistory.styled';

export const TransactionHistory = ({transactions}) => {
    return (
        <Container>
            <ContainerHead>
                <ContainerHeadList>
                    <ContainerHeadItem>Type</ContainerHeadItem>
                    <ContainerHeadItem>Amount</ContainerHeadItem>
                    <ContainerHeadItem>Currency</ContainerHeadItem>
                </ContainerHeadList>
            </ContainerHead>
            <ContainerInfo>
                {transactions.map(transaction => (
                    <ContainerInfoList key={transaction.id}>
                        <ContainerInfoItem>{transaction.type}</ContainerInfoItem>
                        <ContainerInfoItem>{transaction.amount}</ContainerInfoItem>
                        <ContainerInfoItem>{transaction.currency}</ContainerInfoItem>
                    </ContainerInfoList>
                ))}
            </ContainerInfo>
        </Container>
    );
};

TransactionHistory.propTypes = {
    data: PropTypes.array,
};