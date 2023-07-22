import PropTypes from 'prop-types';
import { Container, Title, StatList, StatItem, Label, Percentage } from './statistics.styled';

export const Statistics = ({
    data
}) => {
    return (
        <Container>
            <Title>Upload stats</Title>
            <StatList>
                {data.map(data => (
                    <StatItem key={data.id}>
                        <Label>{data.label}</Label>
                        <Percentage>{data.percentage}%</Percentage>
                    </StatItem>
                ))}
            </StatList>
        </Container>
    );
};

Statistics.propTypes = {
    data: PropTypes.array,
};