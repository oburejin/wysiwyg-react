import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../s/block.sass';

class AddBlock extends Component {
  constructor(props){
    super(props);
    this.dispatch_add = this.dispatch_add.bind(this);
    this.open_panel = this.open_panel.bind(this);
  }

  open_panel () {
    this.add_block.focus();
  }

  dispatch_add (type) {
    let { store } = this.context;
    store.dispatch({
      type: 'ADD_BLOCK',
      position: this.props.position + 1,
      element: type
    });
  }

  render() {
    return (
      <div ref={add_block => this.add_block = add_block} className='add-block-line' tabIndex='1'>
        <button className='add-block' onClick={this.open_panel}>✚</button>
        <div className='elements-panel mod-flex'>
          <div className='emenents-panel__element' onClick={this.dispatch_add.bind(this, 'TEXT')}>Text</div>
          <div className='emenents-panel__element' onClick={this.dispatch_add.bind(this, 'DUD')}>DUD</div>
        </div>
      </div>
    )
  }
}

AddBlock.contextTypes = {
  store: React.PropTypes.object
} 
export default AddBlock;