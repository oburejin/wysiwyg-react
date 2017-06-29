import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {DragSource, DropTarget} from 'react-dnd';

class Item extends Component {
  
  render(){
    const { connectDragSource, connectDropTarget, connectDragPreview, isDragging } = this.props;
    const itemClass = (isDragging ? ' is-dragging' : ' ');

    return connectDragPreview(connectDropTarget(

      <div className={"item" + itemClass}>{connectDragSource(<div className="handle"></div>)}{this.props.item.id} : {this.props.item.text} {isDragging?' dragging':''}</div>
    ))
  }
}
const itemSource = {
  beginDrag(props){
    return {
      id: props.id, 
      index: props.index
    };
  },
};


const itemTarget = {
  hover(props, monitor, component) {

    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {return;}
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }
    if(dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {      
      return;
    }

    props.moveItem(dragIndex, hoverIndex);

    monitor.getItem().index = hoverIndex;
  }
  
};



function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
};
function connect (connect) {
  return {connectDropTarget: connect.dropTarget()}
};
export const ItemTypes = {
  ITEM: 'item'
};
export default DropTarget(ItemTypes.ITEM, itemTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(DragSource(ItemTypes.ITEM, itemSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))(Item));