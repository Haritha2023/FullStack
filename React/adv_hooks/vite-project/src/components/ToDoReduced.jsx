import { useReducer } from "react";
import { TiTick, TiTrash } from "react-icons/ti";
import { taskReducers } from "./reducers";
import { formReducers } from "./reducers";

const ToDoReduced = () => {
  //   const [list, setList] = useState([]);

  //   const [task, setTask] = useState({
  //     title: "",
  //     by: "",
  //   });

  const [state, dispatch] = useReducer(taskReducers, []);
  const [task, dispatchTask] = useReducer(formReducers, {
    title: "",
    by: "",
  });

  const handleTask = (e) => {
    e.preventDefault();
    // const key = e.target.name;
    // const value = e.target.value;
    // setTask({ ...task, [key]: value });
    dispatchTask({
      type: "HANDLE_TASK",
      //field :title : 'task
      field: e.target.name,
      payload: e.target.value,
    });
  };

  //   const addTask = () => {
  //     console.log(task);
  //     console.log(uuid());
  //     const updated = { ...task, id: uuid(), isDone: false };
  //     console.log(updated);
  //     setList([...list, updated]);
  //   };

  //   const markDone = (id) => {
  //     console.log(`Task with ${id} is done!`);
  //     const index = list.findIndex((task) => task.id === id);
  //     const doneTask = [...list];
  //     doneTask[index].isDone = true;
  //     setList(doneTask);
  //   };

  //   const deleteTask = (id) => {
  //     console.log(`Task with ${id} to remove!`);
  //     const filteredTask = list.filter((task) => task.id !== id);
  //     setList([...filteredTask]);
  //   };

  return (
    <>
      <div>
        <h1>My TodoList</h1>
        <div>
          I want to do <input type="text" name="title" onChange={handleTask} />{" "}
          by <input type="date" name="by" onChange={handleTask} />
          <button
            className="wishBtn"
            onClick={() => dispatch({ type: "ADD_TASK", payload: task })}
          >
            Add a Task
          </button>
        </div>
        <ul>
          {state.map((item) => (
            <li key={item.id}>
              <span
                style={{ textDecoration: item.isDone ? "line-through" : "" }}
              >
                <strong>{item.title}</strong> is due by {item.by}
              </span>
              <span>
                <TiTick
                  size={24}
                  onClick={() =>
                    dispatch({ type: "DONE_TASK", payload: item.id })
                  }
                />
              </span>
              <span>
                <TiTrash
                  size={24}
                  onClick={() =>
                    dispatch({ type: "REMOVE_TASK", payload: item.id })
                  }
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoReduced;
