import React, {Component} from 'react';
import '../s/block.sass';

class Element extends Component {
  constructor(props){
    super(props);
    }

  render() {
    let {
      content
    } = this.props;
    return (
      <div>
        element
      </div>
    )
  }
}

export default Element;