import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/layout/PageContainer";

const Todo = () => {
	const { todosId } = useParams();
	const [todo, setTodo] = useState(null);
	const [errMsg, setErrMsg] = useState("");
	const [editing, setEditing] = useState(false);
	const [update, setUpdate] = useState({
		title: "",
		desc: "",
	});
	const navigate = useNavigate();

	// initializaed useRef to store the todos array from localstorage and access it in the component
	let currTodos = useRef(null);


	useEffect(() => {
		
		currTodos.current = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
		if (currTodos.current.length > 0) {
			const todoArray = currTodos.current.filter((todo) => todo.id === todosId);
			if (todoArray.length === 1) {
				setTodo(todoArray[0]);
			} else {
				setErrMsg("Cannot load the task.");
			}
		}
	}, [todosId]);

	console.log("todo", todo);

	const toggleEdit = (e) => {
		setEditing(true);
		setUpdate({ title: todo.title, desc: todo.description });
	};

	const handleEdit = (e) => {
		const { name, value } = e.target;
		setUpdate((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleCancel = (e) => {
		console.log("bye");
		setEditing(false);
		setUpdate({
			title: "",
			desc: "",
		});
	};

	// work on this for hwk
	const handleSubmit = (e) => {
		// validate user input, make sure title and description meets the same requirement like creating a new todo
		// update the todo in localStorage and also update the current todo in the state
		// afterward, toggle edit back to false
		e.preventDefault();


		// input validation
		if (update.title.length < 3 || update.desc.length < 3) return;

		// const currTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

		// simple for loop to match the id and update the values for title and desc property
		for (let i = 0; i < currTodos.current.length; i++) {
			if (currTodos.current[i]["id"] === todosId) {
				currTodos.current[i]["title"] = update.title;
				currTodos.current[i]["description"] = update.desc;
			}
		}
		
		// updating todo with the new values after clicking submit
		setTodo((prevState) => ({ ...prevState, title: update.title, description: update.desc }));
		
		// Storing the updated values in todos in localstorage
		localStorage.setItem("todos", JSON.stringify(currTodos.current));
		setEditing(false);
		// navigate("/todos");
	};

	return (
		<PageContainer pageTitle={editing ? "Editing Todo" : "Todo"}>
			{todo ? (
				<div>
					<form>
						<div>
							<label htmlFor="title">Title: </label>
							<input id="title" name="title" onChange={handleEdit} value={!editing ? todo.title : update.title} className="py-1 px-3 border-2 border-gray-500 rounded-md ml-2" disabled={!editing} />
						</div>
						<div>
							<label htmlFor="desc">Description: </label>
							<input id="desc" name="desc" onChange={handleEdit} value={!editing ? todo.description : update.desc} className="py-1 px-3 border-2 border-gray-500 rounded-md ml-2" disabled={!editing} />
						</div>
					</form>

					{editing ? (
						<div className="flex gap-3">
							<button className="rounded-md border-2 border-transparent bg-indigo-500 text-white py-2 px-3" onClick={handleSubmit} type="button">
								Submit
							</button>
							<button className="rounded-md border-2 border-indigo-500 py-2 px-3" type="button" onClick={handleCancel}>
								Cancel
							</button>
							{/* <button className="rounded-md border-2 border-indigo-500 py-2 px-3" type="button" onClick={goBack}>
								Back
							</button> */}
						</div>
					) : (
						<div>
							<button className="rounded-md border-2 border-transparent bg-indigo-500 text-white py-2 px-3" type="button" onClick={toggleEdit}>
								Edit
							</button>
						</div>
					)}
				</div>
			) : (
				<p className="text-red-500">{errMsg}</p>
			)}
		</PageContainer>
	);
};

export default Todo;
