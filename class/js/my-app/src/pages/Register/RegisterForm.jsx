import React, { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import useFakeLogin from "../../hook/useFakeLogin";

const EMAIL_REGEX = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const RegisterForm = () => {
	const emailRef = useRef();
	const navigate = useNavigate();
	const loginPage = "/login";

	const [username, setUsername] = useState("");
	const [validUsername, setValidUsername] = useState(false);

	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);

	const [pwd, setPwd] = useState("");
	const [validPwd, setValidPwd] = useState(false);

	const [isLoading, setIsLoading] = useState(false);
	const [errMsg, setErrMsg] = useState("");

	const goBack = () => navigate(-1);

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	useEffect(() => {
		setValidEmail(EMAIL_REGEX.test(email) && email.length <= 50);
		setValidUsername(username.length >= 5 && username.length <= 12);
		setValidPwd(pwd.length >= 4 && pwd.length <= 16);
	}, [email, username, pwd]);

	useEffect(() => {
		setErrMsg("");
	}, [email, username, pwd]);

	const handleLogin = async (e) => {
		e.preventDefault();
		setErrMsg("");
		setIsLoading(true);

		const t1 = EMAIL_REGEX.test(email) && email.length <= 50;
		const t2 = username.length >= 5 && username.length <= 12;
		const t3 = pwd.length >= 4 && pwd.length <= 16;

		if (!t1 || !t2 || !t3) {
			setErrMsg("Invalid Inputs");
			setIsLoading(false);
			return;
		}

		try {
			// New User Registration and navigate to login page after registration
			localStorage.setItem("email", email);
			localStorage.setItem("username", username);
			localStorage.setItem("password", pwd);
			console.log("new user registered");
			navigate(loginPage, { replace: true });
		} catch (err) {
			setErrMsg("The server could not be reached. Please try again later.");
			setIsLoading(false);
		}
	};

	return (
		<>
			<form onSubmit={handleLogin} className="flex flex-col gap-3 w-7/12 md:w-4/12 lg:w-3/12 mx-auto">
				<div className="flex flex-col">
					<label htmlFor="email">Email: </label>
					<input ref={emailRef} className="py-1 px-3 border-2 border-black rounded-md" id="email" type="email" placeholder="user@domain.com" required onChange={(e) => setEmail(e.target.value)} value={email} />
					{!validEmail && email.length > 0 && <p className="text-red-500">Not a valid email</p>}
				</div>

				<div className="flex flex-col">
					<label htmlFor="username">Username: </label>
					<input className="py-1 px-3 border-2 border-black rounded-md" id="username" type="username" required onChange={(e) => setUsername(e.target.value)} value={username} />
					{!validUsername && username.length > 0 && <p className="text-red-500">Not a valid username</p>}
				</div>

				<div className="flex flex-col">
					<label htmlFor="password">Password: </label>
					<input className="py-1 px-3 border-2 border-black rounded-md" id="password" type="password" required onChange={(e) => setPwd(e.target.value)} value={pwd} />
					{!validPwd && pwd.length > 0 && <p className="text-red-500">Not a valid password</p>}
				</div>

				<button type="submit" className="rounded-md border-2 border-transparent bg-indigo-500 text-white py-2 px-3 mt-6" disabled={isLoading || !validEmail || !validPwd || !validUsername}>
					Register
				</button>

				<button className="rounded-md border-2 border-indigo-500 py-2 px-3" onClick={goBack}>
					Go Back
				</button>
			</form>
			{errMsg && <p className="text-red-500">{errMsg}</p>}
		</>
	);
};

export default RegisterForm;
