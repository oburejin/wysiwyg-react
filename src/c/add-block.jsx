import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../s/block.sass';

class AddBlock extends Component {
  constructor(props){
    super(props);
    this.dispatch_add = this.dispatch_add.bind(this);
  }
  dispatch_add () {
    let { store } = this.context;
    store.dispatch({
      type: 'ADD_BLOCK',
      position: this.props.position + 1
    });
  }
  render() {
    return (
      <button className='add-block' onClick={this.dispatch_add}>✚</button>
    )
  }
}

AddBlock.contextTypes = {
  store: React.PropTypes.object
} 
export default AddBlock;