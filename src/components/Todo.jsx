import { useState } from "react";
import InputComp from "./InputComp";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [activity, setActivity] = useState({
    todoInput: { todo: "", time: "" },
    todoList: [],
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setActivity((prevData) => ({
      ...prevData,
      todoInput: { ...prevData.todoInput, [name]: value },
    }));
  };

  const handleAdd = () => {
    setActivity((prevData) => ({
      todoList: [...prevData.todoList, prevData.todoInput],
      todoInput: { todo: "", time: "" },
    }));
  };

  const handleRemove = (index) => {
    setActivity((prevData) => ({
      ...prevData,
      todoList: prevData.todoList.filter((_, i) => index !== i),
    }));
  };

  const handleUpdate = (ind, uptTodo, uptTime) => {
    setActivity((prevData) => ({
      ...prevData,
      todoList: prevData.todoList.map((item, i) =>
        i === ind ? { ...item, todo: uptTodo, time: uptTime } : item
      ),
    }));
  };

  return (
    <>
      <h1 className="text-center my-3">Todo App</h1>
      <div className="d-flex justify-content-center  m-auto">
        <InputComp
          type={"text"}
          name={"todo"}
          value={activity.todoInput.todo}
          onFunction={handleOnchange}
          klass=" w-25"
        />

        <InputComp
          type={"time"}
          name={"time"}
          value={activity.todoInput.time}
          onFunction={handleOnchange}
          klass="ms-2 w-25"
        />

        <button
          className="btn btn-primary ms-5 px-5 py-2  fs-2 fw-bolder"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      {activity.todoList
        .map((item, index) => (
          <div key={index}>
            <TodoItem
              sentTodo={item.todo}
              sentTime={item.time}
              sentFun={handleRemove}
              indexValue={index}
              handleupdate={handleUpdate}
              // handleonchange={handleOnchange}
            />
          </div>
        ))
        .reverse()}
    </>
  );
};

export default Todo;
