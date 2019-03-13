import React from 'react';
import DisplayUsers from './DisplayUsers';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users : [],
            removeCount : 0
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => 
                this.setState({ users })
                
            );
    }

    removeUser = (email) => {
        let { users } = this.state;
        let filterUsers = users.filter((user) => { return user.email !== email });
        this.setState({ users : filterUsers, removeCount : this.state.removeCount+=1 })
    }

    render() {
        const { users, removeCount } = this.state;
        return (
            <div>
                <DisplayUsers 
                    users = { users }
                    removeUser = { this.removeUser }
                    removeCount = {removeCount}
                />
            </div>
        )
    }
}

export default App;