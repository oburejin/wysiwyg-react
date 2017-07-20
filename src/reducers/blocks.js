const blocks = (state = [], action) => {
  switch (action.type) {
    case 'MOVE_UP':
      return console.log('move block up');
    case 'MOVE_TOP': 
      return console.log('move block top');
    case 'ADD_BLOCK': 
      return console.log('add block');
  }
}

export default blocks;