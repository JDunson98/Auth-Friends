import React, { Component } from 'react';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';

class NewFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandle = e => {
        e.preventDefault();

        AxiosWithAuth()
            .post('/api/friends', this.state)
            .then(res => {
                console.log(res);
                this.setState({ name: '', age: '', email: ''});
            })
            .catch(err => {
                console.log('new friend err', err)
            });
    };

    render() {
        return (
            <div>
                <h2>Add New Friend</h2>
                <form onSubmit={this.submitHandle}>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder='Name'
                    />
                    <input
                        type='number'
                        name='age'
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder='Age'
                    />
                    <input
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder='Email'
                    />
                    <button type='submit'>Add New Friend</button>
                </form>
            </div>
        );
    }
}

export default NewFriend;