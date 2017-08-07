import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Wysiwyg from './c/wysiwyg.jsx';
import reducer from './r/reducer.js';

let default_state = {
  blocks: [{id: 0}, {id: 1}, {id: 2}, {id: 3}], 
  next_block_id: 4,
  order: [0, 1, 2, 3]
};

let stored_state = JSON.parse(localStorage.getItem('react-ww'));
const store = createStore(reducer, stored_state || default_state);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.state || stored_state || default_state;
  }
  componentDidMount() {
    document.execCommand("DefaultParagraphSeparator", false, "p");
  }
  render() {
    
    
    return (
      <Provider store={store}>
        <div>
          <Wysiwyg />
        </div>
      </Provider>
    )
  }
};

App.childContextTypes = {
  store: React.PropTypes.object
};

let render = () => ReactDOM.render(<App/>, document.getElementById('app'));
store.subscribe(render)
render();
