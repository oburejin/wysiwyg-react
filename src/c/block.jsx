import React, {Component} from 'react';
import ControlPanel from './control-panel.jsx';
import  AddBlock from './add-block.jsx';
import Element from './element.jsx';
import ElementText from './element-text.jsx';
import '../s/block.sass';

const colors = ['#ef5350', '#ec407a', '#ab47bc', '#7e57c2', '#5c6bc0', '#42a5f5', '#29b6f6', '#00bcd4', '#009688'];

class Block extends Component {
  constructor(props){
    super(props);
    this.update_block = this.update_block.bind(this);
    }

  update_block(event, data, e) {
    let {store} = this.context;

    store.dispatch({
      type: 'UPDATE_BLOCK',
      block_id: this.props.id,
      block_data: event.target.innerHTML
    });
  }

  render() {
    let {
      position, 
      id,
      element,
      element_data
    } = this.props;

    
    let el = element == 'TEXT' ? <ElementText id={id} update={this.update_block} element_data={element_data}/> : <Element  id={id}/>;
    return (
      <div>
        <div className='block' style={{backgroundColor: colors[id%colors.length]}}>
          Block #{id}
          {el}
          <ControlPanel block_position={position}/>
        </div>
        <AddBlock position={position}/>
      </div>
    )
  }
}

Block.contextTypes = {
  store: React.PropTypes.object
} 

export default Block;