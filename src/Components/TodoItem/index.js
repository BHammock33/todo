import React from "react";
import {
  handleTodoItemDataUpdate,
  handleTodoItemDataDelete,
} from "../../Services/todoItemService";
import PropTypes from "prop-types";

const TodoItem = (props) => {
  //const todoItemData = props.todoItemData;
  const { todoItemData, todoItems, setTodoItems } = props;

  return (
    <div>
      <>
        <input
          type="checkbox"
          onChange={(e) => {
            todoItemData.isDone = !todoItemData.isDone;
            handleTodoItemDataUpdate(
              todoItemData,
              true,
              todoItems,
              setTodoItems
            );
          }}
          checked={todoItemData.isDone}
        />

        {todoItemData.isDone ? (
          <label
            style={
              //                        true                           false
              todoItemData.isDone ? { textDecoration: "line-through" } : {}
              //same as todoItem.isDone === true ?
            }
          >
            {todoItemData.itemName}
          </label>
        ) : (
          <>
            <input
              type="text"
              value={todoItemData.itemName}
              placeholder="New Todo Item..."
              onChange={(e) => {
                todoItemData.itemName = e.target.value;
                handleTodoItemDataUpdate(
                  todoItemData,
                  false,
                  todoItems,
                  setTodoItems
                );
              }}
              onBlur={(e) => {
                todoItemData.itemName = e.target.value;
                handleTodoItemDataUpdate(
                  todoItemData,
                  true,
                  todoItems,
                  setTodoItems
                );
              }}
            />
          </>
        )}
        <span
          style={{ marginLeft: "1em", cursor: "pointer" }}
          onClick={(e) => {
            handleTodoItemDataDelete(todoItemData, setTodoItems);
          }}
        >
          ➖
        </span>
      </>
    </div>
  );
};

TodoItem.propTypes = {
  todoItemData: PropTypes.any.isRequired,
  todoItems: PropTypes.array.isRequired,
  setTodoItems: PropTypes.func.isRequired,
};
export default TodoItem;
//TodoItem is a child of TodoApp (along with header/footer/todoItems) data coming from parent is accessible
//to child from props
//<> is same as <React.fragment>
