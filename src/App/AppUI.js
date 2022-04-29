import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "../TodoContext";
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { Skeleton } from '../Skeleton';

function AppUI() {
    const {
      error, 
      loading, 
      searchedTodos, 
      completeTodos,
      deleteTodos,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
          { !!openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
          <TodoCounter/>
          <TodoSearch/>
            <TodoList>
                {error && (<p>Hubo un error</p>) }
                {loading && 
                  [...Array(10)].map((_, i) =>
                    <Skeleton />
                  )
                }
                {!loading && !searchedTodos.length && <p>No hay resultados</p> }
            
                {searchedTodos.map(todo => (
                    <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodos(todo.text)}
                    onDelete={() => deleteTodos(todo.text)}
                    />
                ))}
            </TodoList> 
          <CreateTodoButton 
            setOpenModal={setOpenModal}
          />
        </React.Fragment>
      );
}

export { AppUI };