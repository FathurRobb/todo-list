import React from "react";

import Todos from "../todos/Todos"

const List = (props) => {
    const {todos,setTodos} = props;
    return (
        <div>
            <h3><b>Working.. 🔥</b></h3>
            <div>
                { todos.filter((todo) => !todo.isDone).map((todo) => (
                    <Todos todo={todo} setTodos={setTodos} key={todo.id} />
                ))}
            </div>
            <h3><b>Done..! 🎉</b></h3>
            <div>
                { todos.filter((todo) => todo.isDone).map((todo) => (
                    <Todos todo={todo} setTodos={setTodos} key={todo.id} />
                ))}
            </div>
        </div>
    )
}

export default List;