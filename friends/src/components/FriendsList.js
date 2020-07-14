import React from 'react';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';
import { Link } from 'react-router-dom';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () =>  {
        AxiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log({ res });
                this.setState({ friends: res.data });
                this.setState({ isLoading: false });
        })
            .catch(err => console.log('Friends List error', err))
    }
    render() {
        return (
            <div>
                {this.state.friends.map(friend => {
                    return (
                        <div key={friend.id}>
                            <h3>{friend.name}</h3>
                            <h4>{friend.age}</h4>
                            <h4>{friend.email}</h4>
                        </div>
                    )
                })}
                <Link to='/NewFriend'>Add New Friend</Link>
            </div>
        )
    }
}

export default FriendsList;