import React from 'react';
import PropTypes from 'prop-types';

function ArcButton({id, onArchive, titleButton}){
    return (
        <button className='note-item__archive-button' onClick={() => onArchive(id)}>{titleButton}</button>
    )
}

ArcButton.propTypes = {
    id: PropTypes.number.isRequired,
    onArchive: PropTypes.func.isRequired,
    titleButton: PropTypes.func.isRequired,
  }

export default ArcButton;