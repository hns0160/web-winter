import React, {useState,useEffect}from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/usersC/userAction";


const UsersC = () =>{
    const userC = useSelector((state) => state.userC)
    const dispatch = useDispatch()
    
    const [inpDelete,setDelete] = useState(0)

    useEffect (()=>{
            fetch(`https://jsonplaceholder.typicode.com/users/`).then((response) => {
            return response.json();
        })
            .then((result) => {
                console.log(result)
                const action = [inpDelete,result]
                dispatch(setUser(action))
        })
        //     .catch((err) => {
        //     setErr(true);
        // });
    },[])

    // if (err) {
    //     return (
    //         <div>
                
    //             <h1>UserC</h1>
    //             <p>An unexpected error occured!</p>
    //         </div>
    //     );
    // }
    function handleChange(e){
        setDelete(e.target.val)
    }

    function delID(e){
        const action = [inpDelete]
        dispatch(setUser(action))

    }

    return <div>
                <h1>Users list with Redux</h1>
                <label>Remove user list with ID <input name="Delete ID" type="number" val={inpDelete} onChange={handleChange}/></label>
                <button onClick={delID}>Delete User</button>
                {console.log(userC)}
                {/* {userC[1].map(user=> (
					<div key={user.id}>
						<h2>{user.name}:::{user.id}</h2>
					</div>
				))} */}

            </div>
}


export default UsersC