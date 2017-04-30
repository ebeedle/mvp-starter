import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Messages </h4>
    There are { props.items.length } messages.
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;