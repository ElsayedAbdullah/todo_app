import React, {Component} from "react";

class ListForm extends Component {
  state= {
    name: ''
  }

  handleChange = (e)=> {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit =(e)=>{
    e.preventDefault();
    if(e.target.name.value !== ''){
      this.props.addItem(this.state)
      this.setState({
        name: ''
      })
    }
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} id='name' type="text" placeholder="Enter what you will do" value={this.state.name} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ListForm;
