
  
const searchReducer = (state, action)  => {
  let newState;
  switch (action.type) {
    case 'GET_SEARCHS':
      newState = { ...state, searchFetch: true }  
      break;
    case 'RESULT_SEARCHS':
      newState = { ...state, searchResults: action.payload, searchFetch: false }   
      break;
    case 'GET_DETAILS':
        newState = { ...state, searchFetch: true } 
        break;   
    case 'RESULT_DETAILS':
      newState = { ...state, detailItem: action.payload, searchFetch: false } 
      break;     
    default:      
      throw new Error();
  } 
  return newState;
}
  
export default searchReducer;  