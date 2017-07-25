import React, {Component} from 'react';
import '../s/element-text.sass';

class ElementText extends Component {
  constructor(props){
    super(props);
    }
  componentDidMount() {
    this.store = this.context.store;

    if (this.props.element_data) {
      console.log(this.store.getState())
    }
  }

  render() {
    let {
      element_data
    } = this.props;

    return (
      <div contentEditable='true'
           className='element-text'
           onInput={this.props.update}
           ref={text => this.text = text}
      >
      <div className="element-text-wrapper">
         <p className='element-text-p' autoFocus='true'></p>
      </div>
      
      </div>
    )
  }
}

ElementText.contextTypes = {
  store: React.PropTypes.object
}

export default ElementText;