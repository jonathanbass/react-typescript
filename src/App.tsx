import * as React from 'react';
import { connect } from 'react-redux';
import { GetAllUsers } from './actions/UserAction';
import './App.css';
import logo from './logo.svg';
import { User } from './models/User';

class App extends React.Component {
  public async componentDidMount() {
    const props = this.props as any;
    props.GetAllUsers();
  }

  public render() {
    const props = this.props as any;
    const users = props.userReducer || [];
    const usersArray = Object.keys(users).map((key) => {
      return users[key] as User;
    });

    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <div>
        <ul className="list-group">{
          usersArray.map(user => <li key={user.id}><strong>{user.name}:</strong> {user.email}</li>)
        }</ul>
      </div>
    </div>);
  }
}

const mapStateToProps = (state: any) => ({
  ...state
})

const mapDispatchToProps = (dispatch: any) => ({
  GetAllUsers: () => dispatch(GetAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps) (App);