
import { useEffect, useReducer } from 'react'
import { todoReducer } from '../useTodos/todoReducer'
const initialState = []
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const useTodos=()=> {
        const [todos, dispath] = useReducer(todoReducer, initialState,init);
        useEffect(() => {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
        , [todos]);
    
        const handleNewTodo = (todo) => {
            const action = {
                type: '[TODO] Add Todo',
                payload: todo
            }
            dispath(action);
        }
        const handleDeleteTodo = (id) => {
            const action = {
                type: '[TODO] Remove Todo',
                payload: id
            }
            dispath(action);
        }
        const handleToggleTodo = (id) => {
            const action = {
                type: '[TODO] Toggle Todo',
                payload: id
            }
            dispath(action);
        }
        const todosCount = todos.length;
        const pendingTodosCount = todos.filter(todo => !todo.done).length;

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
