import PropTypes from 'prop-types';
import { Item, Status, Img, Name } from './friendList.styled';

export const FriendListItem = ({friend}) => {
    return (
        <Item key={friend.id}>
            <Status isOnline={friend.isOnline}>{friend.isOnline ? 'ONLINE' : 'OFFLINE'}</Status>
            <Img src={friend.avatar} alt="User avatar" width="48"></Img>
            <Name>{friend.name}</Name>
        </Item>
    );
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};