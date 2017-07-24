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
    this.panel.classList.remove('hidden');
    this.add_button.classList.add('hidden');

  }

  close_panel () {
    this.add_button.classList.remove('hidden');
    this.panel.classList.add('hidden');
  }

  dispatch_add () {
    let { store } = this.context;
    store.dispatch({
      type: 'ADD_BLOCK',
      position: this.props.position + 1
    });
    this.close_panel();
  }

  render() {
    return (
      <div className='add-block-line'>
        <button ref={button => this.add_button = button} className='add-block' onClick={this.open_panel}>✚</button>
        <div ref={panel => this.panel = panel} className='elements-panel mod-flex hidden'>
          <div className='emenents-panel__element' onClick={this.dispatch_add}>Text</div>
          <div className='emenents-panel__element' onClick={this.dispatch_add}>Widget</div>
        </div>
      </div>
    )
  }
}

AddBlock.contextTypes = {
  store: React.PropTypes.object
} 
export default AddBlock;