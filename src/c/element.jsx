import React, {Component} from 'react';
import '../s/block.sass';

class Element extends Component {
  constructor(props){
    super(props);
    }
  
  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    console.log('mounted element in block #', this.props.id);
  }
  componentDidUpdate() {
    console.log('updated element in block #', this.props.id);
  }

  render() {
    console.log('rendering Element for block #', this.props.id);
    let {
      content
    } = this.props;
    return (
      <div>
        {/* <iframe width="255" height="155" src="http://www.example.com" frameBorder="0"></iframe> */}
        <div className="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-height="200px" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
      </div>
    )
  }
}

export default Element;