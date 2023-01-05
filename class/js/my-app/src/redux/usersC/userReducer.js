import { SET_USER } from "./userTypes";

const initialFetch = []

const UserCReducer = (state = initialFetch, action) => {
	switch (action.type) {
		case SET_USER:
			if (action.payload[0] !== 0 && action.payload.length > 1){
				return [...action.payload]}
			else{
				console.log("hellow")
				// const answer = state.filter(user => user.id !== action.payload[0])
				// return answer
			}
		default:
			return state;
	}
};

export default UserCReducer