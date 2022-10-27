import React from "react";

const Todos = (props) => {
    const {todo,setTodos} = props;
    return(
        <div className="list-todo" key={todo.id}>
            <h4>{todo.title}</h4>
            <p>{todo.context}</p>
            <div>
                <button className="btn-delete" onClick={() => 
                    setTodos((prev) =>
                        prev.filter((prev) => prev.id !== todo.id)
                    )
                  }>Delete</button>
                <button className="btn-done" onClick={() => 
                    setTodos((prevs) => {
                        return prevs.map((prev) => {
                          if (prev.id === todo.id) {
                            return { ...prev, isDone: !prev.isDone };
                          }
                          return prev;
                        });
                      })
                    }>{todo.isDone ? 'Cancel':'Done'}</button>
            </div>
        </div>
    );
};

export default Todos;