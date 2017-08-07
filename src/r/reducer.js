
import update from 'react/lib/update';

const reducer = (state = [], action) => {
  let s = state.blocks.slice();
  switch (action.type) {
    // ====================================
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
    // ====================================
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
    // ====================================
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
    // ====================================
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
      return state;
    }
    // ====================================
    case 'ADD_BLOCK': { 
      console.log('ADD_BLOCK', action.element ,'to position:', action.position);
      state.blocks = [...s.slice(0, action.position), {id: state.next_block_id, element: action.element}, ...s.slice(action.position)];
      state.next_block_id++;
      return state;
    }
    // ====================================
    case 'UPDATE_BLOCK': {
      console.log('UPDATE_BLOCK',action.block_id, action.block_data );
      let current_block = state.blocks.filter(block => action.block_id == block.id)[0];
      current_block.element_data = action.block_data;
      return state;
    }
  }
  return state;
};

export default reducer;