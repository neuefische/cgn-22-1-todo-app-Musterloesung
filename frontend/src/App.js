import Header from "./components/Header";
import BoardsOverview from "./components/BoardsOverview";
import NewTodo from "./components/NewTodo";
import styled from "styled-components/macro";
import {useEffect, useState} from "react";
import {getTodos, postTodo} from "./service/todo-api-service";

function App() {

    const [todos, setTodos] = useState([]);

    const addTodo = (description) => {
        postTodo(description)
            .then(addedTodo => setTodos([...todos, addedTodo]))
    }

    useEffect(() => {
        getTodos()
            .then(todos => setTodos(todos))
    }, [])

    return (
        <PageLayout>
            <Header/>
            <BoardsOverview todos={todos}/>
            <NewTodo onAdd={addTodo}/>
        </PageLayout>
    );
}

export default App;

const PageLayout = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: min-content 1fr min-content;

`
