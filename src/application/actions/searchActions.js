import axios from 'axios';

export const getSearchs = async (query, dispatch) => {  
  dispatch({type: 'GET_SEARCHS'}); 
  return axios.get(`http://localhost:5000/api/items/?q=${query}`)
  .catch(error => {
      return error;
  })    
  .then(response =>  {
    dispatch({type: 'RESULT_SEARCHS', payload: response.data}); 
    return response.data;
  });
}

export const getDetails = async (idPed, dispatch) => {
  dispatch({type: 'GET_DETAILS'});
  return axios.get(`http://localhost:5000/api/items/${idPed}`)
  .catch(error => {
      return error;
  })    
  .then(response =>  {
    dispatch({type: 'RESULT_DETAILS', payload: response.data}); 
    return response.data;
  });
}