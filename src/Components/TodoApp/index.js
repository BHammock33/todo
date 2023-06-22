import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import TodoItem from "../TodoItem";

const TodoApp = () => {
  // const [todoId, setTodoId] = useState(4);
  const [todoItems, setTodoItems] = useState([]);
  useEffect(() => {
    fetch("/api/todoItems")
      .then((response) => response.json())
      .then((data) => {
        setTodoItems(data);
      });
  }, []);

  function handleTodoItemDataUpdate(data, shouldSave) {
    if (!shouldSave) {
      const todoItemsCopy = [...todoItems];
      const index = todoItemsCopy.findIndex(
        (todoItem) => todoItem.id === data.id
      );
      todoItemsCopy[index] = data;
      setTodoItems(todoItemsCopy);
    } else {
      fetch("/api/todoItems", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((todoItems) => setTodoItems(todoItems));
    }
  }

  function handleTodoItemDataDelete(data) {
    // let todoItemsCopy = [...todoItems];
    // todoItemsCopy = todoItemsCopy.filter((todoItem) => todoItem.id !== data.id);
    // setTodoItems(todoItemsCopy);
    fetch("/api/todoItems", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((todoItems) => setTodoItems(todoItems));
  }
  function handleTodoItemDataAdd() {
    const data = {
      itemName: "Get Milk",
      isDone: false,
    };
    fetch("/api/todoItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((todoItems) => setTodoItems(todoItems));
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
