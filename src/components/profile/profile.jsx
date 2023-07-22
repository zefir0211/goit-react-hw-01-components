import PropTypes from 'prop-types';
import { Container, ContainerDescription, Img, Name, Tag, Location, Statistic, StatisticList, Label, Quantity } from './profile.styled';

export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats:{
        followers,
        views,
        likes,
    },
}) => {
    return (
        <Container>
            <ContainerDescription>
                <Img
                src={avatar}
                alt="User avatar"
                class="avatar"
                ></Img>
                <Name>{username}</Name>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
            </ContainerDescription>

            <Statistic>
                <StatisticList>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
                </StatisticList>
                <StatisticList>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
                </StatisticList>
                <StatisticList>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
                </StatisticList>
            </Statistic>
        </Container>
    );
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};
