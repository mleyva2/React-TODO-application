import React from "react";

export function ToDo() {
	const [todos, setTodos] = React.useState([]);
	const [task, setTask] = React.useState("");

	return (
		<div>
			<input
				type="text"
				value={task}
				onChange={event => {
					setTask(event.target.value);
				}}
				onKeyPress={event => {
					if (event.key === "Enter") {
						const newTodos = todos.concat([task]);
						setTodos(newTodos);
						setTask("");
					}
				}}
			/>

			<ul>
				{todos.map((item, index) => {
					return (
						<li key={index}>
							{item}
							<button
								onClick={() => {
									const newTodos = todos.filter((e, i) => {
										return i !== index;
									});
									setTodos(newTodos);
								}}>
								x
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
