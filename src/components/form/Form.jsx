import React from "react";
import { useState } from "react";

const Form = (props) => {
    const {todos, setTodos} = props;

    const {title, setTitle} = useState('');
    const {context, setContext} = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value)
        } else {
            setContext(e.target.value)
        }
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, { id: +new Date(), title, context, isDone: false }]);
        setTitle('');
        setContext('');
    }

    return (
        <div className="form-input">
            <form className="form-inline" onSubmit={(e) => handleAddTodo(e)}>
                <div className="form-group">
                    <label htmlFor="title" className="label-form">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="context" className="label-form">Context</label>
                    <input type="text" className="form-control" id="context" value={context} onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-success submit-form">Submit</button>
            </form> 
        </div>
    );
};
export default Form;