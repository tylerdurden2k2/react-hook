import { useState } from "react";
const Todo = (props) => {
    const [job, setJob] = useState("");
    const [todos, setTodos] = useState([
        { id: "todo1", title: "Choi game" },
        { id: "todo2", title: "Xem bong da" },
        { id: "todo3", title: "Hoc bai" },
        { id: "todo4", title: "An com" },
        { id: "todo5", title: "Giat do" },
    ]);

    const handleOnChangeInput = (event) => {
        setJob(event.target.value);
    };
    const handleAddTodo = () => {
        if (!job) {
            alert("You need to insert value!");
            return;
        }
        const newTodo = { id: Math.floor(Math.random() * 10000), title: job };
        setTodos([...todos, newTodo]);
        setJob("");
    };
    const handleDeleteTodo = (id) => {
        let currentTodos = todos;
        currentTodos = currentTodos.filter((item) => item.id !== id);
        setTodos(currentTodos);
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={job}
                    onChange={(event) => handleOnChangeInput(event)}
                />
                <button type="button" onClick={() => handleAddTodo()}>
                    Add
                </button>
            </div>
            {todos &&
                todos.length > 0 &&
                todos.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <span>{`${index + 1} - ${item.title}`}</span>
                            <span onClick={() => handleDeleteTodo(item.id)}>
                                &nbsp; &nbsp; X
                            </span>
                        </div>
                    );
                })}
        </div>
    );
};
export default Todo;
