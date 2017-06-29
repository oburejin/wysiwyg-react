import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import update from 'react/lib/update';
import HTML5Backend from 'react-dnd-html5-backend';
import Item from './item.jsx';

class List extends Component {
  constructor (props) {
    super(props);
    this.moveItem = this.moveItem.bind(this);
    this.state = {items: [
      {id: 0, text: 'abc'},
      {id: 1, text: 'def'},
      {id: 2, text: 'ghi'},
    ]};
  }

  moveItem(dragIndex, hoverIndex) {
    const {items} = this.state;
    const dragItem = items[dragIndex];

    this.setState(update(this.state, {
      items: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragItem],
        ],
      }
    }));
  }

  render() {
    const {items} = this.state;

    return (
      <div className='list'>
        {items.map((item, i) => (
          <Item 
            key={item.id} 
            id={item.id}
            index={i}
            item={item} 
            moveItem={this.moveItem}
          />
        ))}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(List);