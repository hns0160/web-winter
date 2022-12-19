import React,{useState,useEffect} from 'react';

const UsersB = () => {
    const [data, setData] = useState([]);
	const [err, setErr] = useState(false);
    const [inputID, setInput] = useState("3");

    function handleChange(e){
        setInput(e.target.value)
    }

    function fetchData(){
        if (inputID == "0"){
            setData("data not available")
        }
        else {
            fetch(`https://jsonplaceholder.typicode.com/users/${inputID}`)
            .then((response) => {
            return response.json();
        })
            .then((result) => {
            setData(result);
        })
            .catch((err) => {
            setErr(true);
        });}
      
    }

    useEffect(()=>{fetchData()},[inputID])

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
            {console.log(data)}
            <h2>
                {JSON.stringify(data)}

            </h2>
        </div>
    )
}
export default UsersB;