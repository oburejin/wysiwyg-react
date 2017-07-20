import React, {Component} from 'react';
import '../s/block.sass';

class ControlPanel extends Component {
  constructor(props){
    super(props);
    this.move_up = this.move_up.bind(this);
    this.move_top = this.move_top.bind(this);
    this.move_down = this.move_down.bind(this);
    this.move_bottom = this.move_bottom.bind(this);
  }

  componentDidMount () {
    this.store = this.context.store;
  }

  move_up () {
    this.store.dispatch({
      type: 'MOVE_UP',
      index: this.props.block_position
    });
  }

  move_top () {
      this.store.dispatch({
        type: 'MOVE_TOP',
        index: this.props.block_position
      });
  }

  move_down () {
    this.store.dispatch({
      type: 'MOVE_DOWN', 
      index: this.props.block_position
    });
  }

  move_bottom () {
    this.store.dispatch({
      type: 'MOVE_BOTTOM', 
      index: this.props.block_position
    });
  }
  render() {
    return (
      <div className='control-panel'>
        {this.props.block_position}
        <button onClick={this.move_top}>⇞</button>
        <button onClick={this.move_up}>↑</button>
        <button onClick={this.move_down}>↓</button>
        <button onClick={this.move_bottom}>⇟</button>
      </div>
    )
  }
}

ControlPanel.contextTypes = {
  store: React.PropTypes.object
};

export default ControlPanel;