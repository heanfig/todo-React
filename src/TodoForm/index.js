import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){

    const [ text, setText ] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setOpenModal(false);
    }

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea
             value={text}
             onChange={onChange}
             placeholder="Cortar la cebolla para el alumerzo" 
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"   
                    onClick={onCancel}
                >Cancelar</button>
                <button 
                    className="TodoForm-button TodoForm-button--add"
                    type="submit">
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };