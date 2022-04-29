import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}) {
  
  const onClickButton = () => {
    setOpenModal(prev => !prev);
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={ () => onClickButton() }
      > +
    </button>
  );
}

export { CreateTodoButton };
