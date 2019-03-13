import React from 'react';
import removeIcon from './remove.png';

class DisplayUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            removeCount : this.props.removeCount
        }
    }

    

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("nextProps", nextProps);
        if(nextProps.removeCount !== prevState.removeCount) {
            return {
                removeCount : nextProps.removeCount,
                users : nextProps.users
            }
        }
        return null;
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("Data1", prevState);
    //     console.log("Data2", this.state);
    // }

    refreshData = () => {
        window.location.reload(true)
    }

    renderUsers = (users) => users.map((e, index) => (
            <tr key={index}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td><img style={{ cursor : 'pointer'}} onClick={() => this.props.removeUser(e.email)} src={removeIcon} /></td>
            </tr>
    ));

    render() {
        console.log("state", this.state);
        const { users } = this.props;
        return (
            <div>
                <table>
                    <tbody>
                        { this.renderUsers(users) }
                    </tbody>
                </table>
                <p>Removed Count : {this.state.removeCount}</p>
                <button onClick={this.refreshData}>Refresh Records</button>
            </div>
        )
    }
}

export default DisplayUsers;