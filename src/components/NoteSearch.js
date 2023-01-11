import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

function NoteSearch({keywordSearch, addKeyword}){
  function onKeywordChangeEventHandler(event){
    addKeyword({keywordSearch: event.target.value});
  }
    return(
        <input type="text" placeholder='Search here...' value={keywordSearch} onChange={onKeywordChangeEventHandler}></input>
    );
}

NoteSearch.propTypes = {
  keywordSearch: PropTypes.func.isRequired,
  addKeyword: PropTypes.func.isRequired,
}


export default NoteSearch;