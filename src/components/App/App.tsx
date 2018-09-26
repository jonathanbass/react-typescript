import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GetAllUsers } from '../../actions/UserAction';
import { IAppProperties } from '../../interfaces/IAppProperties';
import logo from '../../logo.svg';
import './App.css';

class App extends React.Component<IAppProperties, IAppProperties> {
  public async componentDidMount() {
    await this.props.GetAllUsers();
  }

  public render() {
    const state = this.props.userReducer || [];

    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <div>{
        state == null || state.isLoading ? 
        <div className="lds-ripple"><div/><div/></div> : 
        <ul className="list-group">{
          state.users.map(user => <li key={user.id}><strong>{user.name}:</strong> {user.email}</li>)
        }</ul>}
      </div>
    </div>);
  }
}

const mapStateToProps = (state: IAppProperties) => state;

const mapDispatchToProps = (dispatch: ThunkDispatch<IAppProperties, {}, Action<IAppProperties>>) => ({

  GetAllUsers: () => dispatch(GetAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps) (App);