import React from 'react'
import Search from '../assets/icon-search.svg';

function Searchbar({searchHandler, changeHandler, result}) {
  return (
    
           <form id='myform'className='input-box'>
             <input type='search'className='search-input' placeholder='Search Github username...' onChange={changeHandler} />
             {!result?<span className='error'>No Result</span> : ''}
             <img className='search-icon'src={Search}></img>
             <button onClick={searchHandler}  className='search-btn'>Search</button>
           </form>
         
       
  )
}

export default Searchbar;