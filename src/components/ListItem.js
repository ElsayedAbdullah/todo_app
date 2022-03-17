import React, {Component} from "react";

class ListItem extends Component {
  render() {
    return <li>{this.props.item.name}</li>;
  }
}

export default ListItem;
