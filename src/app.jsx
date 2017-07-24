import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import update from 'react/lib/update';
import Wysiwyg from './c/wysiwyg.jsx';

const blocks_reducer = (state = [], action) => {
  let s = state.blocks.slice();
  switch (action.type) {
    case 'MOVE_UP': {
      let { index } = action;
      console.log('MOVE_UP block #', index);
      if (index < 1) {return state;}
      state = update(state, {
        blocks: {
          $splice: [
            [index, 1],
            [index - 1, 0, s[index]]
          ]
        }
      });    
      
        
      return state;
    }
    case 'MOVE_TOP': {
      let { index } = action;
      console.log('MOVE_TOP block #', index);
      if (index < 1) {return state;}
      
      state = update(state, {
        blocks: {
          $splice: [
            [index, 1],
            [0, 0, s[index]]
          ]
        }
      });
      

      return state;
    }
    case 'MOVE_DOWN': {
      let { index } = action;
      console.log('MOVE_DOWN block #', index);
      if (index > s.length - 2) {return state;}
      state = update(state, {
        blocks: {
          $splice: [
            [index, 1],
            [index + 1, 0, s[index]]
          ]
        }
      });
      return state;
    }
    case 'MOVE_BOTTOM': {
      let { index } = action;
      console.log('MOVE_BOTTOM block #', index);
      if (index > s.length - 2) {return state;}
      state = update(state, {
        blocks: {
          $splice: [
            [index, 1],
            [s.length - 1, 0, s[index]]
          ]
        }
      });
      // state.blocks = [...s.slice(0, index), ...s.slice(index + 1), s[index]];
      // state.blocks.splice(index, 1);
      return state;
    }

    case 'ADD_BLOCK': { 
      console.log('13')
      console.log('ADD_BLOCK', action.element ,'to position:', action.position);
      state.blocks = [...s.slice(0, action.position), {id: state.next_block_id, element: action.element}, ...s.slice(action.position)];
      state.next_block_id++;
      return state;
    }
  }
  return state;
};

let default_state = {
  blocks: [{id: 0, is_hollow: true}, {id: 1}, {id: 2}, {id: 3}], 
  next_block_id: 4,
  order: [0, 1, 2, 3]
};
const store = createStore(blocks_reducer, default_state);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.state || default_state;
  }
  render() {
    
    
    return (
      <Provider store={store}>
        <Wysiwyg />
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
