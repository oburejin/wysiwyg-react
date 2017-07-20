import React, {Component} from 'react';
import { connect } from 'react-redux';
import Block from './block.jsx';
import '../s/app.sass';

class Wysiwyg extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    let { store } = this.context;
    let blocks = store.getState().blocks.map((item, index) => {
      return <Block 
                    position={index} 
                    id={item.id} 
                    key={item.id}
                    is_hollow={item.is_hollow}
              />
    });
 
    return (
      <div className="app">
         {blocks}
      </div>
    )
  }
}


Wysiwyg.contextTypes = {
  store: React.PropTypes.object
}

export default Wysiwyg;