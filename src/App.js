import React,{ Component } from 'react';
import './App.css';
import ListingUser from './components/ListingUser/ListingUser';
import TodoApp from './components/TodoApp/TodoApp';

class App extends Component {
  render () {
    return (
      <div className="App">
        
        <TodoApp />

        <ListingUser />
      </div>
    );
  }
}

export default App;
