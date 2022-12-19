import React,{useState,useEffect} from "react";

const Posts = () => {
	const [data, setData] = useState([]);
	const [err, setErr] = useState(false);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => {
				console.log("response", response);
				return response.json();
			})
			.then((result) => {
				setData(result.slice(0, 20));
			})
			.catch((err) => {
				setErr(true);
			});

	}, []);

	if (err) {
		return (
			<div>
				<h1>Posts</h1>
				<p>An unexpected error occured!</p>
			</div>
		);
	}

	return (
		<div>
			<h1>Posts</h1>
			<ul>
				{data.map((post) => (
					<div key={post.id}>
						<h2>{post.title}:::{post.id}</h2>
						<p>{post.body}</p>
					</div>
				))}
			</ul>
		</div>
	);
};

export default Posts