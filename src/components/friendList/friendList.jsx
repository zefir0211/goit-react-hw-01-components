import PropTypes from 'prop-types';
import { FriendListItem } from './friendListItem'
import { Container } from './friendList.styled';

export const FriendList = ({
    friends
}) => {
    return (
        <Container>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}
        </Container>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};