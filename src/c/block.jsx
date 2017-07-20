import React, {Component} from 'react';
import ControlPanel from './control-panel.jsx';
import  AddBlock from './add-block.jsx';
import Element from './element.jsx';
import '../s/block.sass';

const colors = ['#ef5350', '#ec407a', '#ab47bc', '#7e57c2', '#5c6bc0', '#42a5f5', '#29b6f6', '#00bcd4', '#009688'];

class Block extends Component {
  constructor(props){
    super(props);
    this.ok = '';
    }
  


  render() {
    let {
      position, 
      id,
      is_hollow
    } = this.props;
    return (
      <div>
        <div className='block' style={{backgroundColor: colors[id%colors.length]}}>
          Block #{id} | {this.ok}
          <Element id={id}/>
          {/* {(id==1)?<iframe src="https://vuejs.org/v2/guide/" frameBorder="1"></iframe>: ''}
          {(id==2)?<iframe src="https://vuejs.org/v2/guide/installation.html" frameBorder="1"></iframe>: ''} */}
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