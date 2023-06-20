import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import TodoItem from "../TodoItem";

const TodoApp = () => {
  const [todoId, setTodoId] = useState(4);
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      itemName: "get the milk!",
      isDone: false,
    },
    {
      id: 2,
      itemName: "Pick up dry cleaning",
      isDone: false,
    },
    {
      id: 3,
      itemName: "go to work",
      isDone: true,
    },
  ]);

  function handleTodoItemDataUpdate(data) {
    const todoItemsCopy = [...todoItems];
    const index = todoItemsCopy.findIndex(
      (todoItem) => todoItem.id === data.id
    );
    todoItemsCopy[index] = data;
    setTodoItems(todoItemsCopy);
  }

  function handleTodoItemDataDelete(data) {
    let todoItemsCopy = [...todoItems];
    todoItemsCopy = todoItemsCopy.filter((todoItem) => todoItem.id !== data.id);
    setTodoItems(todoItemsCopy);
  }
  function handleTodoItemDataAdd() {
    const todoItemsCopy = [...todoItems];
    todoItemsCopy.push({
      id: todoId,
      itemName: "",
      isDone: false,
    });
    setTodoId(todoId + 1);
    setTodoItems(todoItemsCopy);
  }

  return (
    <div>
      <Header />
      <div style={{ marginBottom: "3rem" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ alignItems: "center" }}>To do List</h1>
          <div
            style={{
              fontSize: "16px",
              alignItems: "center",
              marginLeft: "1.5em",
              cursor: "pointer",
            }}
            onClick={(e) => {
              handleTodoItemDataAdd();
            }}
          >
            ➕
          </div>
        </div>
        {todoItems.map((data) => {
          return (
            <TodoItem
              todoItemData={data}
              key={data.id}
              emitTodoItemDataUpdate={handleTodoItemDataUpdate}
              emitTodoItemDataDelete={handleTodoItemDataDelete}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default TodoApp;
//e = event
// const [name, setName] = useState("Bennett");
// const [age, setAge] = useState(28);
// //on init method (sort of like constructor)
// useEffect(() => {
//   console.log("No dependecny use effect");
// }, []);
// //dependent on name
// useEffect(() => {
//   console.log("Hello my name is", name);
//   console.log("and I am " + age + " years old");
// }, [name, age]);
/* <div>
            <label
              htmlFor="name"
              style={{
                marginRight: "1rem",
              }}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <label
              htmlFor="age"
              style={{
                marginRight: "1rem",
              }}
            >
              Age:
            </label>
            <input
              type="number"
              id="age"
              onChange={(e) => setAge(e.target.value)}
              //onChange = {function (e) {
              //setAge(e.target.value);
              //}} The same as above
              value={age}
            />
          </div>
          <h3>My name is {name}</h3>
          <h3>And I am {age} years old</h3> */
//{} inside return allows for JS expressions
//parent to child key and data
//child to parent modify and then emit
//inside an object it expects keys and values, string key : value
