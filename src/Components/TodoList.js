import React, {useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';


function TodoList() {
    const [todos ,setTodos] = useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)) {                                   // supp user is adding just letter or giving space after that so that kind of todos should enter hence this function is used.
            return;
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    };

    const updateTodo = (todoId , newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)) {                             // supp user is adding just letter or giving space after that so that kind of todos should enter hence this function is used.
            return;
        }
        setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item ))
        );
    }


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id  !== id)

        setTodos(removeArr);
    }

    const completeTodo = id => {                                                       // we willl check weather our todos are completed or not we will map the todos thats why we use map function here.
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>What are you upto?</h1>
            <TodoForm  onSubmit={addTodo}/>
            <Todo todos ={todos} completeTodo ={completeTodo} removeTodo={removeTodo} updateTodo = {updateTodo}
            />
        </div>
    )
}

export default TodoList