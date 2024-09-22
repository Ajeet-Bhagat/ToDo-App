import HeadName from "./components/HeadName";
import "bootstrap/dist/css/bootstrap.min.css";
import InputBar from "./components/InputBar";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoitems, setTodoItem] = useState([]);

  const handleNewItem = (itemname, itemDate) => {
    if (itemname.trim() !== "" && itemDate.trim() !== "") {
      const newTodoItem = [...todoitems, { name: itemname, date: itemDate }];
      setTodoItem(newTodoItem);
    } else {
      alert("Please fill the form");
    }
  };

  const handleDeleteClick = (itemname) => {
    const newTodoItem = todoitems.filter((item) => item.name !== itemname);
    setTodoItem(newTodoItem);
  };

  return (
    <>
      <center>
        <HeadName></HeadName>
        <div id="mydiv">
          <InputBar onNewItem={handleNewItem}></InputBar>
          <hr />
          <hr />
          {todoitems.length === 0 && <WelcomeMsg></WelcomeMsg>}
          <TodoItems
            todoitems={todoitems}
            onDeleteItem={handleDeleteClick}
          ></TodoItems>
        </div>
      </center>
    </>
  );
}

export default App;
