import * as React from 'react';
import { UsersApi } from './api/UsersApi';
import './App.css';
import logo from './logo.svg';
import { User } from './models/User';

class App extends React.Component {
  public async componentDidMount() {
    const users = await UsersApi.GetAllUsers();
    this.setState(users);
  }

  public render() {
    const users = this.state || [];
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

export default App;
