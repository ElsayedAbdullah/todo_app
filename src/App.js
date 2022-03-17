import React,{ Component } from 'react';
import './App.css';
import ListForm from './components/ListForm';
import Lists from './components/Lists';

class App extends Component {
  state= {
    lists: []
  }

  addItem =(item) => {
    item.id = Math.random();
    let lists = this.state.lists;
    lists.push(item)
    this.setState({
      lists
    })
  }
  render () {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <ListForm addItem={this.addItem}/>
        <Lists lists={this.state.lists}  />
      </div>
    );
  }
}

export default App;
