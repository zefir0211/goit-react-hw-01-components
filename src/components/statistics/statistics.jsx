import PropTypes from 'prop-types';
import { Container, Title, StatList, StatItem, Label, Percentage } from './statistics.styled';

export const Statistics = ({
    title, stats
}) => {
    return (
        <Container>
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map(stat => (
                    <StatItem key={stat.id}>
                        <Label>{stat.label}</Label>
                        <Percentage>{stat.percentage}%</Percentage>
                    </StatItem>
                ))}
            </StatList>
        </Container>
    );
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
    title: PropTypes.string,
};