import { DEPOSIT, RESET, WITHDRAW } from "./balanceTypes";

const initialState = 0;

const balanceReducer = (state = initialState, action) => {
	console.log(action.type);
	switch (action.type) {
		case DEPOSIT:
			return state + parseInt(action.payload);

		case WITHDRAW:
			return state - parseInt(action.payload); 

		case RESET:
			return parseInt(action.payload);

		default:
			return state;
	}
};

export default balanceReducer;
