import React from "react";

const UserCard = (props) => {
	return (
		<div className="ml-60 w-2/5 p-8 border-2 border-black rounded-md bg-cyan-700 flex flex-col">
			<div className="p-8 border-2 border-black rounded-md bg-indigo-700 flex flex-col">
				<div className="mb-3 bg-indigo-300 flex flex-row">
					<div className="text-xl mr-4">{props.userInfo.name[0]}</div>
					<div className>{props.userInfo.name}</div>
				</div>
				<div className="flex-auto">
					{" "}
					Hi, My username is {props.userInfo.username}. You can reach me on email: {props.userInfo.email} or mobile: {props.userInfo.phone}
				</div>
			</div>

			{/* <li>{props.name}</li> */}
		</div>
	);
};

export default UserCard;
