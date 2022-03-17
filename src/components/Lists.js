import React from "react";
import ListItem from "./ListItem";

function Lists(props) {
  const {lists} = props;

  return (
    <div>
      {lists.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Lists;
