import React, {Component} from 'react';
import '../s/element-text.sass';

class ElementText extends Component {
  constructor(props){
    super(props);
    this.updateChange = this.updateChange.bind(this);
    }
  
  updateChange () {
    console.log(this.text.innerHTML);
  }
  render() {
    let {
      content
    } = this.props;
    return (
      <div contentEditable='true'
           className='element-text'
           onInput={this.updateChange}
           ref={text => this.text = text}
      >
      <div className="element-text-wrapper">
         <p className='element-text-p' autoFocus='true'></p>
      </div>
      
      </div>
    )
  }
}

export default ElementText;