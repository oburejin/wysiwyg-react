import React, {Component} from 'react';
import '../s/element-text.sass';

class ElementText extends Component {
  constructor(props){
    super(props);
    }

  render() {
    let {
      content
    } = this.props;
    return (
      <div contentEditable='true'
           className='element-text'
      >
      <p className='element-text-p' placeholder='Enter text'></p>
      </div>
    )
  }
}

export default ElementText;