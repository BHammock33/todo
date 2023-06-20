import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const TodoApp = () => {
  //inside an object it expects keys and values, string key : value
  const todoItems = [
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
  ];

  return (
    <div>
      <Header />
      <div style={{ marginBottom: "3rem" }}>
        <h1>To do List</h1>
        {todoItems.map((todoItem) => {
          return (
            <div key={todoItem.id}>
              {
                <label
                  style={
                    //                        yes                           no
                    todoItem.isDone ? { textDecoration: "line-through" } : {}
                    //same as todoItem.isDone === true ?
                  }
                >
                  {todoItem.itemName}
                </label>
              }
            </div>
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
