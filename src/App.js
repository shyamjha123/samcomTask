import React from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Task.css"

function Todo({ todo, index, markTodo, removeTodo }){
    return (
        <div className="todo">
            <span style={{ textDecoration :  todo.isDone ? "line-through" : "" }}>{todo.text}</span>
            <div>
                <Button varient="outline-success" onClick={()=> markTodo(index)}>/</Button>{' '}
                <Button varient="outline-danger" onClick={()=> removeTodo(index)}>x</Button>
            </div>
        </div>
    );
}
function FormTodo({ addTodo }){
    const [value, setValue] = React.useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return ;
        addTodo(value);
        setValue("");
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><b>Add Todo</b></Form.Label>
                <Form.Control type="text" className="input"  value={value} onChange={e => setValue(e.target.value)} placeholder="Add new Todo" />

            </Form.Group>
            <Button varient="primary mb-3" type="submit">Submit</Button>

        </Form>
    );
}
function App(){
    const [todos, setTodos] = React.useState([
        {
        text: "This is a sampe todo",
        isDone: false
        }
    ]);
    const addTodo = text =>{
        const newTodos = [...todos, { text }];
       // newTodos[index].isDone = true;
        setTodos(newTodos);
    };
    const markTodo = index => {
        const newTodods = [...todos];
        newTodods[index].isDone = true;
        setTodos(newTodods);
    }
    const removeTodo = index => {
        const newTodods = [...todos];
        newTodods.splice(index, 1);
        setTodos(newTodods);
    };
    return(
        <div className=""app>
            <div className="container">
                <h1 className="text-center mb-4">Todo List</h1>
                <FormTodo addTodo={addTodo} />
                <div>
                    {todos.map((todo, index) => (
                        <Card>
                            <Card.Body>
                                <Todo key={index} index={index} todo={todo} markTodo={markTodo} removeTodo={removeTodo} />

                            </Card.Body>
                        </Card>
                    ))}
                </div>
                
            </div>
        </div>
    );
}
export default App;

