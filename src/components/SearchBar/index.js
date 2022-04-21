import { React, useEffect, useState} from 'react';
import { useHistory, useLocation } from "react-router-dom";
import Lupa from '../../assets/img/ic_Search.png';

const SearchBar = props => {

    //const [state,setState] = useContext(AppContext);
    const [valInp, setValInp] = useState('');
    const history = useHistory();
    const { search } = useLocation();

    let s = new URLSearchParams(search).get('search');
    useEffect(() => {
      setValInp(s != null ? s : '');
    }, [s]);

    const handleChange = (e) => {
        e.preventDefault();     
        setValInp(e.target.value);
    }

    const handleSubmit = (e) => {  
        e.preventDefault();
        if(e.target[0].value !== ""){
          //setState({ ...state, searchValue: e.target[0].value});          
          history.push({pathname: '/items', search: `?search=${e.target[0].value}`});
        }
    }

    return (
      <div className='searchbar-container'>
        <form className='searchbar-form' onSubmit={handleSubmit.bind(this)}>
            <input 
              type="text" 
              placeholder='Nunca dejes de buscar'
              className='searchbar-input'
              value={valInp}
              onChange={ handleChange.bind(this) } 
              tabIndex="2"/>
              <button 
                type='submit'
                className='searchbar-btnSubmit'>
                <img src={Lupa} alt='search-icon' />
              </button>
        </form>
      </div> 
    );
}

export default SearchBar;