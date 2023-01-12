import React from "react";
import PageContainer from "../../components/layout/PageContainer";
import { useState, useEffect } from "react";
import UserCard from "../../components/UserCard";

const Users = () => {
	const [data, setData] = useState([]);
	const [err, setErr] = useState(false);
	const [currentID, setID] = useState([""]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				console.log("response", response);
				return response.json();
			})
			.then((result) => {
				console.log(result);
				setData(result);
			})
			.catch((err) => {
				setErr(true);
			});

		console.log("after fetch");
	}, []);

	const handleChange = (e) => {
		console.log("Hello");
		console.log(e);
		setID(data.filter((user) => user.id == e.target.value));
		console.log(currentID);
	};

	return (
		<PageContainer>
			Users
			<div>
				<select name="usersList" onChange={handleChange}>
					{data.map((users) => (
						<option value={users.id}>{users.name}</option>
					))}
				</select>
			</div>
			<div>
				<ul>
					{currentID.map((user) => (
						<li>
							<h1> {user.id} </h1>
							<p>{user.name} </p>
							<p>{user.username} </p>
							<p>{user.email}</p>
						</li>
					))}
				</ul>
			</div>
			<UserCard userInfo={currentID[0]}></UserCard>
		</PageContainer>
	);
};

export default Users;
