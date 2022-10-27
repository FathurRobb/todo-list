import {React, useState} from "react";

import Header from "../components/header/Header";
import Form from "../components/form/Form";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {id:1, title:"Study React 1",context:"Learn basic of ReactJs", isDone:true},
        {id:2, title:"Study React 2",context:"Learn intermediete of ReactJs", isDone:false},
    ]);
    return(
        <Layout>
            <Header/>
            <Form todos={todos} setTodos={setTodos} />
            <List todos={todos} setTodos={setTodos} />   
        </Layout>
    )
}

export default TodoList;