import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ReactDOM from 'react-dom';
import List from './dnd/list.jsx';

import './s/app.sass';

class App extends Component {

  render() {
   
    return (
      <div>
        <List/>

      </div>
    )
  }

}


ReactDOM.render(<App/>, document.getElementById('app'));
