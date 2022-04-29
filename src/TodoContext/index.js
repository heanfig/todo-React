import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1',[]);
    
      const [ searchValue, setSearchValue ] = React.useState('');
      const [ openModal, setOpenModal ] = React.useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if(!searchValue.length >= 1){
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => 
          todo.text.toLowerCase().includes(searchValue.toLowerCase())
        );
      }
    
      const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }
    
      const deleteTodos = (text) => {
        const newTodos =  todos.filter(todo => todo.text !== text);
        saveTodos(newTodos);
      }

      const addTodo = (text) => {
        saveTodos([...todos, {
          completed: false,
          text
        }]);
      }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };