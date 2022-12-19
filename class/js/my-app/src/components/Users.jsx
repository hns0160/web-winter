import React,{useState,useEffect} from 'react';

const Users = () => {
    const [data, setData] = useState([]);
	const [err, setErr] = useState(false);
    const [inputID, setInput] = useState("1");

    function handleChange(e){
        setInput(e.target.value)
    }

    function handleClick(e){
        console.log(inputID)

        fetch(`https://jsonplaceholder.typicode.com/users/${inputID}`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            setData(result);
        })
        .catch((err) => {
            setErr(true);
        });
        
    }

    function getData(inpData){
        let {name:name2,phone} = inpData;
        return [name2,":::",phone]
    }

    if (err) {
        return (
            <div>
                <h1>Users</h1>
                <p>An unexpected error occured!</p>
            </div>
        );
    }

    return( 
        <div>
            <h1>Users List</h1>
            <label htmlfor = "userID">
                Enter the user ID you want to fetch: <input id="userID" name="userID" type="number" onChange={handleChange} />

            </label>

            <br />
            <button onClick={handleClick}> Fetch User</button>
            {console.log(data)}
            <h2>
                {/* {JSON.stringify(data)} */}
                {getData(data)}
            </h2>
        </div>
    )
}
export default Users;