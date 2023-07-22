import PropTypes from 'prop-types';
import { Container, Item, Status, Img, Name } from './friendList.styled';

export const FriendList = ({
    friends
}) => {
    return (
        <Container>
            {friends.map(friend => (
                <Item key={friend.id}>
                    <Status isOnline={friend.isOnline}>{friend.isOnline ? 'ONLINE' : 'OFFLINE'}</Status>
                    <Img src={friend.avatar} alt="User avatar" width="48"></Img>
                    <Name>{friend.name}</Name>
                </Item>
            ))}
        </Container>
    );
};

FriendList.propTypes = {
    data: PropTypes.array,
}