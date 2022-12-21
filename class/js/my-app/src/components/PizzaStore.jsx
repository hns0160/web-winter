import React, {useState}from "react";
import { openClose, resetAll, setCheese, setCombo, setPepperoni } from "../redux/pizza/pizzaActions";
import { useSelector, useDispatch } from "react-redux";


const PizzaStore = () => {
	const dispatch = useDispatch();
	const pizza = useSelector((state) => state.pizza);

	const [inputID, setInput] = useState(0);
	const newInput = () => inputID

	const nameToAction = {"pepperoni":setPepperoni,"combo":setCombo,"cheese":setCheese}

	function handleChange(e){
	
        setInput(e.target.value)
		console.log(inputID,"yes")
		
    }

	const handleSet = (event) => {

		const name = event.target.name
		const item = nameToAction[name]

		const action = item(inputID)
		dispatch(action)

		setInput(0)

	};

	function handleOnOff(e) {
		const action = openClose()

		dispatch(action)
	}

	function handleReset(e){
		const action = resetAll()

		dispatch(action)
	}

	return (
		<div>
			<h1>Pizza Store</h1>
			<h2>The store is {pizza.isOpen ? "Open" : "Close"} </h2>
			<h3>Pepperoni Pizzas in stock: {pizza.pepperoni}</h3>
			<h3>Combo Pizzas in stock: {pizza.combo}</h3>
			<h3>Cheese Pizzas in stock: {pizza.cheese}</h3>

			<button onClick={handleOnOff}>Open & Close Shop</button>
			<br />
			<br />

			<label>
				Amount to stock: <input type="number" name="inputID" value={newInput()} onChange={handleChange} />
			</label>

			<br />
			<button name="pepperoni" onClick={handleSet}>Set pepperoni pizzas</button>
			<br />
			<button name="combo" onClick={handleSet}>Set combo pizzas</button>
			<br />
			<button name="cheese" onClick={handleSet}>Set cheese pizzas</button>
			<br />
			<button onClick={handleReset}>Reset All</button>
		</div>
	);
};

export default PizzaStore;
